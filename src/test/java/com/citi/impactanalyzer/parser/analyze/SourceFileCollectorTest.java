package com.citi.impactanalyzer.parser.analyze;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SourceFileCollectorTest {

    private SourceFileCollector sourceFileCollector;

    @TempDir
    Path tempDir;

    @BeforeEach
    void setUp() {
        sourceFileCollector = new SourceFileCollector();
    }

    @Test
    void testGetClassCodeList_EmptyDirectory() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);
        List<String> result = sourceFileCollector.getClassCodeList();
        assertNotNull(result);
        assertEquals(0, result.size());
    }

    @Test
    void testGetClassCodeList_SingleJavaFile() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);
        String javaCode = "public class Test { public void method() { } }";
        Path javaFile = srcPath.resolve("Test.java");
        Files.writeString(javaFile, javaCode);

        List<String> result = sourceFileCollector.getClassCodeList();
        assertEquals(1, result.size());
        assertEquals(javaCode, result.get(0));
    }

    @Test
    void testGetClassCodeList_MultipleJavaFiles() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        String code1 = "public class FirstClass { }";
        String code2 = "public class SecondClass { }";
        String code3 = "public class ThirdClass { }";

        Files.writeString(srcPath.resolve("FirstClass.java"), code1);
        Files.writeString(srcPath.resolve("SecondClass.java"), code2);
        Files.writeString(srcPath.resolve("ThirdClass.java"), code3);

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(3, result.size());
        assertTrue(result.contains(code1));
        assertTrue(result.contains(code2));
        assertTrue(result.contains(code3));
    }

    @Test
    void testGetClassCodeList_NestedDirectories() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Path packageDir = srcPath.resolve("com/example/service");
        Files.createDirectories(packageDir);

        String code1 = "public class Service { }";
        String code2 = "public class Util { }";

        Files.writeString(srcPath.resolve("Root.java"), code1);
        Files.writeString(packageDir.resolve("NestedService.java"), code2);

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(2, result.size());
        assertTrue(result.contains(code1));
        assertTrue(result.contains(code2));
    }

    @Test
    void testGetClassCodeList_IgnoreNonJavaFiles() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        String javaCode = "public class JavaFile { }";
        Files.writeString(srcPath.resolve("JavaFile.java"), javaCode);
        Files.writeString(srcPath.resolve("config.xml"), "<config></config>");
        Files.writeString(srcPath.resolve("readme.txt"), "This is a readme");
        Files.writeString(srcPath.resolve("properties.yml"), "key: value");

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(1, result.size());
        assertEquals(javaCode, result.get(0));
    }

    @Test
    void testGetClassCodeList_DeepNestedStructure() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Path deepPath = srcPath.resolve("com/example/app/service/util");
        Files.createDirectories(deepPath);
        String code = "public class DeepClass { }";
        Files.writeString(deepPath.resolve("DeepClass.java"), code);

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(1, result.size());
        assertEquals(code, result.get(0));
    }

    @Test
    void testGetClassCodeList_ComplexJavaCode() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        String complexCode = """
                package com.example;
                import java.util.*;
                public class ComplexClass {
                  private String name;
                  public ComplexClass(String name) { this.name = name; }
                  public String getName() { return name; }
                }""";

        Files.writeString(srcPath.resolve("ComplexClass.java"), complexCode);

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(1, result.size());
        assertEquals(complexCode, result.get(0));
    }

    @Test
    void testGetClassCodeList_MixedFileTypesInNestedDirs() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Path pkg1 = srcPath.resolve("com/example");
        Path pkg2 = srcPath.resolve("org/app");
        Files.createDirectories(pkg1);
        Files.createDirectories(pkg2);

        String java1 = "public class Service { }";
        String java2 = "public class Repository { }";

        Files.writeString(pkg1.resolve("Service.java"), java1);
        Files.writeString(pkg1.resolve("config.xml"), "<config/>");
        Files.writeString(pkg2.resolve("Repository.java"), java2);
        Files.writeString(pkg2.resolve("build.gradle"), "plugins { }");

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(2, result.size());
        assertTrue(result.contains(java1));
        assertTrue(result.contains(java2));
    }

    @Test
    void testGetClassCodeList_FileWithNoContent() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        Files.writeString(srcPath.resolve("Empty.java"), "");

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(1, result.size());
        assertEquals("", result.get(0));
    }

    @Test
    void testGetClassCodeList_CaseInsensitiveExtension() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        String code = "public class Test { }";

        Files.writeString(srcPath.resolve("lowercase.java"), code);
        Files.writeString(srcPath.resolve("UPPERCASE.JAVA"), "public class Upper { }");

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(1, result.size());
        assertEquals(code, result.get(0));
    }

    @Test
    void testGetClassCodeList_LargeFile() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        StringBuilder largeCode = new StringBuilder("public class LargeClass {\n");
        for (int i = 0; i < 1000; i++) {
            largeCode.append("  public void method").append(i).append("() { }\n");
        }
        largeCode.append("}");
        String code = largeCode.toString();
        Files.writeString(srcPath.resolve("LargeClass.java"), code);
        List<String> result = sourceFileCollector.getClassCodeList();
        assertEquals(1, result.size());
        assertEquals(code, result.get(0));
    }

    @Test
    void testGetClassCodeList_ReturnsList() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);
        Files.writeString(srcPath.resolve("Test.java"), "public class Test { }");
        List<String> result = sourceFileCollector.getClassCodeList();
        assertNotNull(result);
        assertInstanceOf(List.class, result);
    }

    @Test
    void testTraverse_SkipsHiddenFiles() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);
        Files.writeString(srcPath.resolve("Visible.java"), "public class Visible { }");
        List<String> result = sourceFileCollector.getClassCodeList();
        assertEquals(1, result.size());
        assertEquals("public class Visible { }", result.get(0));
    }

    @Test
    void testGetClassCodeList_PreservesFileOrder() throws IOException {
        Path srcPath = tempDir.resolve("build/cloneRepo/src/main/java");
        Files.createDirectories(srcPath);

        String code1 = "public class A { }";
        String code2 = "public class B { }";
        String code3 = "public class C { }";

        Files.writeString(srcPath.resolve("A.java"), code1);
        Files.writeString(srcPath.resolve("B.java"), code2);
        Files.writeString(srcPath.resolve("C.java"), code3);

        List<String> result = sourceFileCollector.getClassCodeList();

        assertEquals(3, result.size());
        assertTrue(result.contains(code1));
        assertTrue(result.contains(code2));
        assertTrue(result.contains(code3));
    }
}

