// 1) კომენტარებით ახსენით რა არის JSX და რატომ გვჭირდება React-ში

// 2) შექმენი ერთი Component, რომელიც აბრუნებს <h1>, <p> და <button> ელემენტებს ერთად

// 3) შექმენი ცალკე ორი Component და ორივე გამოიტანე App Component-ში

// 4) კომენტარებით ახსენით რა განსხვავებაა ჩვეულებრივ JavaScript ფუნქციასა და React Component-ს შორის

// 5) შექმენი Component, რომელშიც JavaScript-ის ცვლადს შექმნი და მის მნიშვნელობას JSX-ის გამოყენებით ეკრანზე გამოიტან



// 1) JSX - საშუალებას გვაძლევს HTML-ს მსგავსი სინტაქსი გამოვიყენოთ JavaScript-ში.
// React-ში გვჭირდება JSX, რადგან ის უფრო მარტივს ხდის UI კომპონენტების შექმნას და მათ DOM-ში გამოჩენას, 
// ეს კი ზრდის კოდის წაკითხვისა და შენარჩუნების სიმარტივეს.


// 2)
function MyComponent() {
    return (
        <div>
            <h1>Hi i am a component</h1>
            <p>This is a paragraph</p>
            <button>Click me</button>
        </div>
    )
}

// 3)
function ComponentOne() {
    return <h2>Component 1</h2>;
}

function ComponentTwo() {
    return <h2>Component 2</h2>;
}

function App() {
    return (
        <div>
            <ComponentOne />
            <ComponentTwo />
        </div>
    );
}


// 4) ჩვეულებრივი JavaScript ფუნქცია არის ფუნქცია, რომელიც ჩვეულებრივად იწერება და გამოიყენება JavaScript-ში.
// React Component კი არის ფუნქცია ან კლასი, რომელიც აბრუნებს JSX-ს (UI ელემენტებს) და გამოიყენება UI-ს შექმნისთვის React-ში. 


// 5)
function VariableComponent() {
    const message = "Hello, this is a message from a variable!";
    return <p>{message}</p>;
}