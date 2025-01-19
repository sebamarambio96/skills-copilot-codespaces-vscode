function skillsMember()
{
    var skills = ["JavaScript", "Python", "C++", "Java", "HTML", "CSS", "SQL", "C#", "PHP", "Ruby", "Swift", "Objective-C", "R", "Scala", "Go", "Perl", "Shell", "TypeScript", "Kotlin", "VBA", "Lua", "Matlab", "Visual Basic", "Groovy", "Haskell", "Clojure", "Erlang", "Rust", "Dart", "Julia", "F#", "COBOL", "Ada", "Apex", "Scheme", "Lisp", "Prolog", "Fortran", "Delphi", "Assembly", "PowerShell", "ActionScript", "ColdFusion", "ABAP", "VBScript", "CoffeeScript", "Elixir", "Eiffel", "Forth", "Hack", "LabVIEW", "Objective-C++", "Pascal", "PL/SQL", "PostScript", "Smalltalk", "Verilog", "VHDL", "XQuery", "Zsh", "Awk", "Bash", "Batch", "C Shell", "COBOL", "D", "Forth", "Groovy", "IDL", "JCL", "Lisp", "M4", "Makefile", "MUMPS", "Nim", "Pascal", "Perl", "PostScript", "Rexx", "Ruby", "Rust", "Scala", "Scheme", "sed", "Tcl", "TeX", "VimL", "Visual Basic", "WebIDL", "X10", "XSLT", "Yacc", "Zsh", "C", "C#", "C++", "Clojure", "CoffeeScript", "CSS", "Go", "Haskell", "HTML", "Java", "JavaScript", "Lua", "Matlab", "Objective-C", "Perl", "PHP", "Python", "R", "Ruby", "Scala", "Shell", "Swift", "TeX", "VimL"];
    var skillsMember = document.getElementById("skillsMember");
    for (var i = 0; i < skills.length; i++)
    {
        var skill = document.createElement("option");
        skill.text = skills[i];
        skillsMember.add(skill);
    }
}
