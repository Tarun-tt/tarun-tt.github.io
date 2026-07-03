var e={id:`rest`,title:`Rest`,definition:`Rest is a fundamental concept in JavaScript that every developer should master.`,deepExplanation:`Understanding rest deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.`,syntax:`// Rest syntax
// See examples below for detailed usage`,visualDiagram:`┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Source    │ ──► │  Rest       │ ──► │   Output    │
│   Code      │     │  Processing  │     │   Result    │
└─────────────┘     └──────────────┘     └─────────────┘`,analogy:`Think of Rest as a toolbox — you pick the right tool for each job instead of using one hammer for everything.`,examples:[{title:`Basic Rest`,code:`// Example 1: Basic usage
const value = "rest";
console.log(value);`,output:`rest`,explanation:`Introduces the core idea behind rest.`},{title:`Practical Rest`,code:`// Example 2: Real-world pattern
function demo() {
  return "Rest works";
}
console.log(demo());`,output:`Rest works`,explanation:`Shows how rest appears in everyday code.`},{title:`With Variables`,code:`// Example 3: Combined with variables
const name = "React Mastery";
const msg = \`Learning \${name} - Rest\`;
console.log(msg);`,output:`Learning React Mastery - Rest`,explanation:`Combines rest with other JS fundamentals.`},{title:`Data Transformation`,code:`// Example 4: Transform data
const items = [1, 2, 3];
const result = items.map((n) => n * 2);
console.log(result);`,output:`[2, 4, 6]`,explanation:`Demonstrates practical data handling related to rest.`},{title:`Error-Safe Pattern`,code:`// Example 5: Safe usage
try {
  const data = { topic: "rest" };
  console.log(data.topic);
} catch (e) {
  console.error(e.message);
}`,output:`rest`,explanation:`Shows defensive coding when working with rest.`}],interviewQuestions:[{question:`Explain rest to a beginner.`,answer:`Rest is a core building block. Start with what problem it solves, then show a minimal example.`},{question:`When would you NOT use rest?`,answer:`When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem.`},{question:`What are common pitfalls with rest?`,answer:`Overuse, misunderstanding scope/lifecycle, and not following established patterns.`},{question:`How does rest compare to alternatives?`,answer:`Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs.`},{question:`Give a real-world use case for rest.`,answer:`Production apps use rest for user-facing features, data flow, and keeping code organized at scale.`}],mistakes:[{wrong:`// Wrong: misusing rest
var x = undefined;
console.log(x.property);`,correct:`// Correct: safe access
const x = { property: "value" };
console.log(x?.property ?? "default");`,explanation:`Always validate data and use safe access patterns with rest.`},{wrong:`// Wrong: overcomplicating
function overlyComplex() { /* 100 lines */ }`,correct:`// Correct: simple and clear
function focused() {
  return "single responsibility";
}`,explanation:`Keep implementations focused and readable.`}],bestPractices:[`Understand rest before using it in production.`,`Start with minimal examples, then scale up.`,`Write tests for critical paths.`,`Follow official documentation and community patterns.`,`Refactor when complexity grows.`],assignment:{title:`Build a Rest Feature`,description:`Create a real-world component or module that demonstrates rest in action.`,checklist:[`Implement core rest functionality`,`Handle edge cases`,`Add clear comments`,`Test with sample data`,`Document your approach`]},quiz:[{question:`What is the primary purpose of rest?`,options:[`To style components`,`To work with rest concepts effectively`,`To replace JavaScript`,`To deploy apps`],answer:`To work with rest concepts effectively`,explanation:`Rest is a core concept you must understand deeply.`},{question:`Which is a best practice for rest?`,options:[`Ignore documentation`,`Write clear, predictable code`,`Avoid testing`,`Use global variables everywhere`],answer:`Write clear, predictable code`,explanation:`Clean code makes debugging and scaling easier.`},{question:`When should you use rest?`,options:[`Never in production`,`When the problem calls for it`,`Only in class components`,`Only on weekends`],answer:`When the problem calls for it`,explanation:`Use the right tool for the right job.`},{question:`What is a common mistake with rest?`,options:[`Reading documentation`,`Overcomplicating simple cases`,`Using TypeScript`,`Writing tests`],answer:`Overcomplicating simple cases`,explanation:`Start simple, then add complexity when needed.`},{question:`How does rest help in real projects?`,options:[`It doesn't`,`Improves maintainability and clarity`,`Slows development`,`Replaces the browser`],answer:`Improves maintainability and clarity`,explanation:`Good patterns scale with your application.`}],cheatSheet:[`Rest: core concept`,`Syntax: see Syntax section`,`Use when: problem requires this pattern`,`Avoid: over-engineering simple cases`,`Pro tip: read docs, practice daily`],summary:`You learned what rest is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.`,practiceQuestions:[{difficulty:`Easy`,title:`Basic Rest`,description:`Write a simple example demonstrating rest.`,starterCode:`// Your code here`},{difficulty:`Easy`,title:`Rest with Data`,description:`Use sample data to practice rest.`,starterCode:`const data = [];
// Implement solution`},{difficulty:`Easy`,title:`Rest Output`,description:`Log the expected output for a rest exercise.`,starterCode:`console.log("TODO");`},{difficulty:`Medium`,title:`Combine Rest`,description:`Combine rest with another concept.`,starterCode:`// Medium challenge`},{difficulty:`Medium`,title:`Refactor Rest`,description:`Refactor given code to use rest properly.`,starterCode:`// Refactor this`},{difficulty:`Medium`,title:`Debug Rest`,description:`Fix the bug related to rest.`,starterCode:`// Buggy code`},{difficulty:`Hard`,title:`Build with Rest`,description:`Build a small feature using rest.`,starterCode:`// Hard challenge`},{difficulty:`Hard`,title:`Rest Architecture`,description:`Design a scalable pattern with rest.`,starterCode:`// Architecture exercise`}],playground:{starterCode:`// Rest in JavaScript
const result = "Hello from Rest";
console.log(result);`,solution:`// Rest in JavaScript
const result = "Hello from Rest";
console.log(result);
// Solution: see examples above`,hint:`Try modifying the rest example step by step. Check the 5-minute examples for guidance.`},miniChallenge:{title:`Rest Mini Challenge`,requirements:[`Demonstrate rest in a small app`,`Use meaningful variable names`,`Show expected output`]}};export{e as default};