const Blog = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold mt-10">
          * What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="my-5">
          Managing state in your React apps isn’t as simple as using useState or
          useReducer. Not only are there are a lot of different kinds of state,
          but there often dozens of ways of managing each kind. Which should you
          choose? In this guide, we will uncover the several kinds of state in
          your React apps that you might not be aware of, plus how to manage
          them in the most effective way.
        </p>
        <p>
          Local (UI) state – Local state is data we manage in one or another
          component. Local state is most often managed in React using the
          useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs. <br />
          <br />
          Global (UI) state – Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least. A common
          example of global state is authenticated user state. If a user is
          logged into our app, it is necessary to get and change their data
          throughout our application. Sometimes state we think should be local
          might become global. <br />
          <br />
          Server state – Data that comes from an external server that must be
          integrated with our UI state. Server state is a simple concept, but
          can be hard to manage alongside all of our local and global UI state.
          There are several pieces of state that must be managed every time you
          fetch or update data from an external server, including loading and
          error state. Fortunately there are tools such as SWR and React Query
          that make managing server state much easier. <br />
          <br />
          URL state – Data that exists on our URLs, including the pathname and
          query parameters. URL state is often missing as a category of state,
          but it is an important one. In many cases, a lot of major parts of our
          application rely upon accessing URL state. Try to imagine building a
          blog without being able to fetch a post based off of its slug or id
          that is located in the URL! There are undoubtedly more pieces of state
          that we could identify, but these are the major categories worth
          focusing on for most applications you build.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          * How does prototypical inheritance work?
        </h2>
        <p className="my-5">
          In programming, we often want to take something and extend it. For
          instance, we have a user object with its properties and methods, and
          want to make admin and guest as slightly modified variants of it. We’d
          like to reuse what we have in user, not copy/reimplement its methods,
          just build a new object on top of it. Prototypal inheritance is a
          language feature that helps in that.
        </p>
        <p>
          When we read a property from object, and it’s missing, JavaScript
          automatically takes it from the prototype. In programming, this is
          called “prototypal inheritance”. And soon we’ll study many examples of
          such inheritance, as well as cooler language features built upon it.
          The property [[Prototype]] is internal and hidden, but there are many
          ways to set it. One of them is to use the special name __proto__, like
          this: rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
          Now if we read a property from rabbit, and it’s missing, JavaScript
          will automatically take it from animal. <br />
          <br />
          Here the line (*) sets animal to be the prototype of rabbit. Then,
          when alert tries to read property rabbit.eats (**), it’s not in
          rabbit, so JavaScript follows the [[Prototype]] reference and finds it
          in animal (look from the bottom up): Here we can say that "animal is
          the prototype of rabbit" or "rabbit prototypically inherits from
          animal". So if animal has a lot of useful properties and methods, then
          they become automatically available in rabbit. Such properties are
          called “inherited”. If we have a method in animal, it can be called on
          rabbit.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          * What is a unit test? Why should we write unit tests?
        </h2>
        <p className="my-5">
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended.
        </p>
        <p>
          Unit testing is an important step in the development process, because
          if done correctly, it can help detect early flaws in code which may be
          more difficult to find in later testing stages. Unit testing is a
          component of test-driven development (TDD), a pragmatic methodology
          that takes a meticulous approach to building a product by means of
          continual testing and revision. This testing method is also the first
          level of software testing, which is performed before other testing
          methods such as integration testing. Unit tests are typically isolated
          to ensure a unit does not rely on any external code or functions.
          Testing can be done manually but is often automated. <br />
          <br />A unit test typically comprises of three stages: plan, cases and
          scripting and the unit test itself. In the first step, the unit test
          is prepared and reviewed. The next step is for the test cases and
          scripts to be made, then the code is tested. Test-driven development
          requires that developers first write failing unit tests. Then they
          write code and refactor the application until the test passes. TDD
          typically results in an explicit and predictable code base.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">* React vs. Angular vs. Vue?</h2>
        <p className="my-5">
          This post is a comprehensive guide on which is perhaps the right
          solution for you: Angular vs React vs Vue. Just a couple of years ago,
          developers were mainly debating whether they should be using Angular
          vs React for their projects. But over the course of the last couple of
          years, we’ve seen a growth of interest in a third player called
          Vue.js. If you are a developer starting out on a project and cannot
          decide on which JavaScript framework to use, this guide should help
          you make a decision.
        </p>
        <p>
          Here we’ll cover various aspects of Angular, Vue, and React to see how
          they suit your needs. This post is not just a guide on Angular vs
          React vs Vue but aims to provide a structure to help judge front-end
          JavaScript frameworks in general. In case a new framework arrives next
          year, you will know exactly what parameters to look at! * In this
          post, we assume that you have basic knowledge of JavaScript and have
          used JavaScript frameworks as well.
        </p>
        <p>Angular vs React</p>
        <p>
          If the choice you’re making is based on Angular vs React alone, then
          you’ll simply need to consider the pros and cons discussed for those
          libraries in this post. But overall, keep in mind that both libraries
          can be used for mobile and web apps, while Angular is generally better
          for more complex apps that are enterprise-ready. React often requires
          extra modules and components, which keeps the core library small, but
          means there’s extra work involved when incorporating outside tools.
          Angular, on the other hand, is more of a full-fledged solution that
          doesn’t require extras like React often does, though it does have a
          steeper learning curve for its core compared to React. React is more
          suitable for intermediate to advanced JavaScript developers who are
          familiar with concepts from ES6 and up, while Angular favors those
          same developers who are also familiar with TypeScript.
        </p>
        <p>React vs Vue</p>
        <p>
          The choice between React vs Vue is often debated and it’s not an easy
          one. Vue has a vibrant and ever-growing community and has taken over
          popularity vs. React in many respects. React developers are still
          churning out lots of new components and extras, so there’s no sign
          that React is on the decline either. Vue is generally more suited to
          smaller, less complex apps and is easier to learn from scratch
          compared to React. Vue can be easier to integrate into new or existing
          projects and many feel its use of HTML templates along with JSX is an
          advantage. Overall, Vue might be the best choice if you’re a newer
          developer and not as familiar with advanced JavaScript concepts, while
          React is quite well suited for experienced programmers and developers
          who have worked with object-oriented JavaScript, functional
          JavaScript, and similar concepts.
        </p>
        <p>Angular vs Vue</p>
        <p>
          In most cases, you probably wouldn’t be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with what’s new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps. It should also be
          noted that Vue was created by a developer who formerly worked on
          Angular for Google, so that’s another thing to keep in mind, though
          that wouldn’t have a huge impact on your decision.
        </p>
      </div>
    </div>
  );
};

export default Blog;
