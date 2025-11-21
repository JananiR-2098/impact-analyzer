package com.citi.impactanalyzer.parser.service;

import com.citi.impactanalyzer.parser.config.DependencyAnalyzerProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PromptServiceTest {

    @Mock
    ChatClientService chatService;
    @Mock
    DependencyAnalyzerProperties properties;

    @InjectMocks
    PromptService promptService;

    private final String MOCK_CODE = "package com.citi.app.service;\nclass MyService {}";
    private final String MOCK_SQL = "SELECT * FROM my_table;";
    private final String MOCK_RESULT = "[{\"source\":\"A\",\"target\":\"B\"}]";

    @BeforeEach
    void setUp() {
        when(chatService.sendPrompt(anyString())).thenReturn(MOCK_RESULT);
    }

    @Test
    void testAnalyzeCodeDependencies_CallsChatService() {
        when(properties.getBasePackage()).thenReturn("com.citi.app");
        String result = promptService.analyzeCodeDependencies(MOCK_CODE, "java");
        verify(chatService).sendPrompt(anyString());
        assertNotNull(result);
    }

    @Test
    void testAnalyzeAndGroupCodeDependencies_UsesStrictRules_WhenBasePackageConfigured() {
        when(properties.getBasePackage()).thenReturn("com.citi.app");
        promptService.analyzeAndGroupCodeDependencies(MOCK_CODE, "java");
        verify(chatService).sendPrompt(contains("STRICT DEPENDENCY SCOPE RULES"));
        verify(chatService).sendPrompt(contains("The application's base package is: com.citi.app"));
    }

    @Test
    void testAnalyzeAndGroupCodeDependencies_DerivesBasePackageFromCode() {
        when(properties.getBasePackage()).thenReturn(null);
        promptService.analyzeAndGroupCodeDependencies(MOCK_CODE, "java");
        verify(chatService).sendPrompt(contains("The application's base package is: com.citi.app.service"));
    }

    @Test
    void testAnalyzeAndGroupCodeDependencies_UsesAutoDetectRules_WhenNoPackageFound() {
        String codeWithoutPackage = "class Helper {}";
        when(properties.getBasePackage()).thenReturn(null);
        promptService.analyzeAndGroupCodeDependencies(codeWithoutPackage, "java");
        verify(chatService).sendPrompt(contains("DEPENDENCY SCOPE RULES (AUTO-DETECT MODE)"));
    }

    @Test
    void testAnalyzeSqlDependencies_CallsChatService_ForFlatList() {
        promptService.analyzeSqlDependencies(MOCK_SQL, "mysql");
        verify(chatService).sendPrompt(contains("Example output:"));
        verify(chatService).sendPrompt(contains("You are a mysql SQL analyzer."));
        verify(chatService).sendPrompt(contains(MOCK_SQL));
        verify(chatService).sendPrompt(eq(MOCK_RESULT));
    }

    @Test
    void testAnalyzeAndGroupSqlDependencies_CallsChatService_ForGroupedList() {
        promptService.analyzeAndGroupSqlDependencies(MOCK_SQL, "mysql");

        verify(chatService).sendPrompt(contains("Then, group all relations by their \"source\"."));
        verify(chatService).sendPrompt(contains("Example:"));
        verify(chatService).sendPrompt(contains("\"source\": \"HR.PAYROLL_PROC\","));
        verify(chatService).sendPrompt(contains("You are a mysql SQL analyzer."));
    }

    @Test
    void testBuildCodePrompt_ExtractBasePackageFromCode_Success() {
        String code = "package com.example.repo;\npublic class UserRepo {}";
        String expectedPackage = "com.example.repo";
        String result = ReflectionTestUtils.invokeMethod(promptService, "extractBasePackageFromCode", code);
        assertEquals(expectedPackage, result);
    }

    @Test
    void testBuildCodePrompt_ExtractBasePackageFromCode_NoPackage() {
        String code = "public class UserRepo {}";
        String result = ReflectionTestUtils.invokeMethod(promptService, "extractBasePackageFromCode", code);
        assertNull(result);
    }

    @Test
    void testBuildCodePrompt_ExtractBasePackageFromCode_HandlesLeadingWhitespace() {
        String code = "   package com.test.util;\npublic class Util {}";
        String expectedPackage = "com.test.util";
        String result = ReflectionTestUtils.invokeMethod(promptService, "extractBasePackageFromCode", code);
        assertEquals(expectedPackage, result);
    }
}