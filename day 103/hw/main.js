// 1. რა არის Props React-ში და რისთვის ვიყენებთ მას?
// 2. როგორ გადავცეთ მონაცემები ერთი კომპონენტიდან მეორეს Props-ის გამოყენებით?
// 3. შექმენი Greeting კომპონენტი, რომელიც Props-ით მიიღებს name-ს და გამოაჩენს:
// <h1>Hello, Giorgi!</h1>
// 4. შექმენი User კომპონენტი, რომელიც Props-ით მიიღებს name-ს და age-ს. გამოაჩინე ორივე მონაცემი გვერდზე.
// 5. შექმენი Product კომპონენტი, რომელიც Props-ით მიიღებს title-ს და price-ს. App კომპონენტში გამოიძახე Product სამჯერ, სხვადასხვა პროდუქტის სახელითა და ფასით.



// 1)
// Props არის მონაცემები, რომლებიც გადაეცემა კომპონენტს მისი მშობელი კომპონენტიდან. ჩვენ ვიყენებთ Props-ს იმისთვის, რომ კომპონენტებს მივაწოდოთ მონაცემები და შევქმნათ ისინი უფრო დინამიური და ხელმისაწვდომი სხვადასხვა კონტექსტში.


// 2)
// მონაცემების გადაცემა Props-ის გამოყენებით ხდება კომპონენტის გამოძახებისას. მშობელი კომპონენტი განსაზღვრავს Props-ს და გადაეცემა შვილ კომპონენტს, რომელიც იღებს Props-ს პარამეტრებში.

// მაგალითად:
function ParentComponent() {
    const message = "Hello from Parent!";
    return <ChildComponent message={message} />;
}


// 3)
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}



// 4)
function User({ name, age }) {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}




// 5)
function Product({ title, price }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Product title="Laptop" price={999} />
            <Product title="Smartphone" price={699} />
            <Product title="Headphones" price={199} />
        </div>
    );
}



