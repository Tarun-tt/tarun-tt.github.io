var e={id:`closures`,title:`Closures`,definition:`Closures is a fundamental concept in JavaScript that every developer should master.`,deepExplanation:`Understanding closures deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.`,syntax:`function outer() {
  const secret = 'hidden';
  return () => secret;
}`,visualDiagram:`┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Source    │ ──► │  Closures   │ ──► │   Output    │
│   Code      │     │  Processing  │     │   Result    │
└─────────────┘     └──────────────┘     └─────────────┘`,analogy:`Closures works like a traffic controller — it directs data and actions so everything flows smoothly.`,examples:[{title:`Basic Closures`,code:`// Example 1: Basic usage
const value = "closures";
console.log(value);`,output:`closures`,explanation:`Introduces the core idea behind closures.`},{title:`Practical Closures`,code:`// Example 2: Real-world pattern
function demo() {
  return "Closures works";
}
console.log(demo());`,output:`Closures works`,explanation:`Shows how closures appears in everyday code.`},{title:`With Variables`,code:`// Example 3: Combined with variables
const name = "React Mastery";
const msg = \`Learning \${name} - Closures\`;
console.log(msg);`,output:`Learning React Mastery - Closures`,explanation:`Combines closures with other JS fundamentals.`},{title:`Data Transformation`,code:`// Example 4: Transform data
const items = [1, 2, 3];
const result = items.map((n) => n * 2);
console.log(result);`,output:`[2, 4, 6]`,explanation:`Demonstrates practical data handling related to closures.`},{title:`Error-Safe Pattern`,code:`// Example 5: Safe usage
try {
  const data = { topic: "closures" };
  console.log(data.topic);
} catch (e) {
  console.error(e.message);
}`,output:`closures`,explanation:`Shows defensive coding when working with closures.`}],interviewQuestions:[{question:`Explain closures to a beginner.`,answer:`Closures is a core building block. Start with what problem it solves, then show a minimal example.`},{question:`When would you NOT use closures?`,answer:`When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem.`},{question:`What are common pitfalls with closures?`,answer:`Overuse, misunderstanding scope/lifecycle, and not following established patterns.`},{question:`How does closures compare to alternatives?`,answer:`Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs.`},{question:`Give a real-world use case for closures.`,answer:`Production apps use closures for user-facing features, data flow, and keeping code organized at scale.`}],mistakes:[{wrong:`// Wrong: misusing closures
var x = undefined;
console.log(x.property);`,correct:`// Correct: safe access
const x = { property: "value" };
console.log(x?.property ?? "default");`,explanation:`Always validate data and use safe access patterns with closures.`},{wrong:`// Wrong: overcomplicating
function overlyComplex() { /* 100 lines */ }`,correct:`// Correct: simple and clear
function focused() {
  return "single responsibility";
}`,explanation:`Keep implementations focused and readable.`}],bestPractices:[`Understand closures before using it in production.`,`Start with minimal examples, then scale up.`,`Write tests for critical paths.`,`Follow official documentation and community patterns.`,`Refactor when complexity grows.`],assignment:{title:`Build a Closures Feature`,description:`Create a real-world component or module that demonstrates closures in action.`,checklist:[`Implement core closures functionality`,`Handle edge cases`,`Add clear comments`,`Test with sample data`,`Document your approach`]},quiz:[{question:`What is the primary purpose of closures?`,options:[`To style components`,`To work with closures concepts effectively`,`To replace JavaScript`,`To deploy apps`],answer:`To work with closures concepts effectively`,explanation:`Closures is a core concept you must understand deeply.`},{question:`Which is a best practice for closures?`,options:[`Ignore documentation`,`Write clear, predictable code`,`Avoid testing`,`Use global variables everywhere`],answer:`Write clear, predictable code`,explanation:`Clean code makes debugging and scaling easier.`},{question:`When should you use closures?`,options:[`Never in production`,`When the problem calls for it`,`Only in class components`,`Only on weekends`],answer:`When the problem calls for it`,explanation:`Use the right tool for the right job.`},{question:`What is a common mistake with closures?`,options:[`Reading documentation`,`Overcomplicating simple cases`,`Using TypeScript`,`Writing tests`],answer:`Overcomplicating simple cases`,explanation:`Start simple, then add complexity when needed.`},{question:`How does closures help in real projects?`,options:[`It doesn't`,`Improves maintainability and clarity`,`Slows development`,`Replaces the browser`],answer:`Improves maintainability and clarity`,explanation:`Good patterns scale with your application.`}],cheatSheet:[`Closures: core concept`,`Syntax: see Syntax section`,`Use when: problem requires this pattern`,`Avoid: over-engineering simple cases`,`Pro tip: read docs, practice daily`],summary:`You learned what closures is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.`,practiceQuestions:[{difficulty:`Easy`,title:`Basic Closures`,description:`Write a simple example demonstrating closures.`,starterCode:`// Your code here`},{difficulty:`Easy`,title:`Closures with Data`,description:`Use sample data to practice closures.`,starterCode:`const data = [];
// Implement solution`},{difficulty:`Easy`,title:`Closures Output`,description:`Log the expected output for a closures exercise.`,starterCode:`console.log("TODO");`},{difficulty:`Medium`,title:`Combine Closures`,description:`Combine closures with another concept.`,starterCode:`// Medium challenge`},{difficulty:`Medium`,title:`Refactor Closures`,description:`Refactor given code to use closures properly.`,starterCode:`// Refactor this`},{difficulty:`Medium`,title:`Debug Closures`,description:`Fix the bug related to closures.`,starterCode:`// Buggy code`},{difficulty:`Hard`,title:`Build with Closures`,description:`Build a small feature using closures.`,starterCode:`// Hard challenge`},{difficulty:`Hard`,title:`Closures Architecture`,description:`Design a scalable pattern with closures.`,starterCode:`// Architecture exercise`}],playground:{starterCode:`// Closures in JavaScript
const result = "Hello from Closures";
console.log(result);`,solution:`// Closures in JavaScript
const result = "Hello from Closures";
console.log(result);
// Solution: see examples above`,hint:`Try modifying the closures example step by step. Check the 5-minute examples for guidance.`},miniChallenge:{title:`Closures Mini Challenge`,requirements:[`Demonstrate closures in a small app`,`Use meaningful variable names`,`Show expected output`]}};export{e as default};