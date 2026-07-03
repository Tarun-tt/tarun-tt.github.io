var e={id:`promises`,title:`Promises`,definition:`Promises is a fundamental concept in JavaScript that every developer should master.`,deepExplanation:`Understanding promises deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.`,syntax:`fetch('/api')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,visualDiagram:`┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Source    │ ──► │  Promises   │ ──► │   Output    │
│   Code      │     │  Processing  │     │   Result    │
└─────────────┘     └──────────────┘     └─────────────┘`,analogy:`Promises works like a traffic controller — it directs data and actions so everything flows smoothly.`,examples:[{title:`Basic Promises`,code:`// Example 1: Basic usage
const value = "promises";
console.log(value);`,output:`promises`,explanation:`Introduces the core idea behind promises.`},{title:`Practical Promises`,code:`// Example 2: Real-world pattern
function demo() {
  return "Promises works";
}
console.log(demo());`,output:`Promises works`,explanation:`Shows how promises appears in everyday code.`},{title:`With Variables`,code:`// Example 3: Combined with variables
const name = "React Mastery";
const msg = \`Learning \${name} - Promises\`;
console.log(msg);`,output:`Learning React Mastery - Promises`,explanation:`Combines promises with other JS fundamentals.`},{title:`Data Transformation`,code:`// Example 4: Transform data
const items = [1, 2, 3];
const result = items.map((n) => n * 2);
console.log(result);`,output:`[2, 4, 6]`,explanation:`Demonstrates practical data handling related to promises.`},{title:`Error-Safe Pattern`,code:`// Example 5: Safe usage
try {
  const data = { topic: "promises" };
  console.log(data.topic);
} catch (e) {
  console.error(e.message);
}`,output:`promises`,explanation:`Shows defensive coding when working with promises.`}],interviewQuestions:[{question:`Explain promises to a beginner.`,answer:`Promises is a core building block. Start with what problem it solves, then show a minimal example.`},{question:`When would you NOT use promises?`,answer:`When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem.`},{question:`What are common pitfalls with promises?`,answer:`Overuse, misunderstanding scope/lifecycle, and not following established patterns.`},{question:`How does promises compare to alternatives?`,answer:`Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs.`},{question:`Give a real-world use case for promises.`,answer:`Production apps use promises for user-facing features, data flow, and keeping code organized at scale.`}],mistakes:[{wrong:`// Wrong: misusing promises
var x = undefined;
console.log(x.property);`,correct:`// Correct: safe access
const x = { property: "value" };
console.log(x?.property ?? "default");`,explanation:`Always validate data and use safe access patterns with promises.`},{wrong:`// Wrong: overcomplicating
function overlyComplex() { /* 100 lines */ }`,correct:`// Correct: simple and clear
function focused() {
  return "single responsibility";
}`,explanation:`Keep implementations focused and readable.`}],bestPractices:[`Understand promises before using it in production.`,`Start with minimal examples, then scale up.`,`Write tests for critical paths.`,`Follow official documentation and community patterns.`,`Refactor when complexity grows.`],assignment:{title:`Build a Promises Feature`,description:`Create a real-world component or module that demonstrates promises in action.`,checklist:[`Implement core promises functionality`,`Handle edge cases`,`Add clear comments`,`Test with sample data`,`Document your approach`]},quiz:[{question:`What is the primary purpose of promises?`,options:[`To style components`,`To work with promises concepts effectively`,`To replace JavaScript`,`To deploy apps`],answer:`To work with promises concepts effectively`,explanation:`Promises is a core concept you must understand deeply.`},{question:`Which is a best practice for promises?`,options:[`Ignore documentation`,`Write clear, predictable code`,`Avoid testing`,`Use global variables everywhere`],answer:`Write clear, predictable code`,explanation:`Clean code makes debugging and scaling easier.`},{question:`When should you use promises?`,options:[`Never in production`,`When the problem calls for it`,`Only in class components`,`Only on weekends`],answer:`When the problem calls for it`,explanation:`Use the right tool for the right job.`},{question:`What is a common mistake with promises?`,options:[`Reading documentation`,`Overcomplicating simple cases`,`Using TypeScript`,`Writing tests`],answer:`Overcomplicating simple cases`,explanation:`Start simple, then add complexity when needed.`},{question:`How does promises help in real projects?`,options:[`It doesn't`,`Improves maintainability and clarity`,`Slows development`,`Replaces the browser`],answer:`Improves maintainability and clarity`,explanation:`Good patterns scale with your application.`}],cheatSheet:[`Promises: core concept`,`Syntax: see Syntax section`,`Use when: problem requires this pattern`,`Avoid: over-engineering simple cases`,`Pro tip: read docs, practice daily`],summary:`You learned what promises is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.`,practiceQuestions:[{difficulty:`Easy`,title:`Basic Promises`,description:`Write a simple example demonstrating promises.`,starterCode:`// Your code here`},{difficulty:`Easy`,title:`Promises with Data`,description:`Use sample data to practice promises.`,starterCode:`const data = [];
// Implement solution`},{difficulty:`Easy`,title:`Promises Output`,description:`Log the expected output for a promises exercise.`,starterCode:`console.log("TODO");`},{difficulty:`Medium`,title:`Combine Promises`,description:`Combine promises with another concept.`,starterCode:`// Medium challenge`},{difficulty:`Medium`,title:`Refactor Promises`,description:`Refactor given code to use promises properly.`,starterCode:`// Refactor this`},{difficulty:`Medium`,title:`Debug Promises`,description:`Fix the bug related to promises.`,starterCode:`// Buggy code`},{difficulty:`Hard`,title:`Build with Promises`,description:`Build a small feature using promises.`,starterCode:`// Hard challenge`},{difficulty:`Hard`,title:`Promises Architecture`,description:`Design a scalable pattern with promises.`,starterCode:`// Architecture exercise`}],playground:{starterCode:`// Promises in JavaScript
const result = "Hello from Promises";
console.log(result);`,solution:`// Promises in JavaScript
const result = "Hello from Promises";
console.log(result);
// Solution: see examples above`,hint:`Try modifying the promises example step by step. Check the 5-minute examples for guidance.`},miniChallenge:{title:`Promises Mini Challenge`,requirements:[`Demonstrate promises in a small app`,`Use meaningful variable names`,`Show expected output`]}};export{e as default};