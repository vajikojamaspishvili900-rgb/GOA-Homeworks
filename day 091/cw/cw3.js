// სიტუაცია:
// წარმოიდგინე, რომ ვებ-გვერდზე გაქვს HTML ფორმა (ან ამზადებ მონაცემებს JavaScript-ით), სადაც მომხმარებელი ავსებს ინფორმაციას. სერვერზე ამ მონაცემების გასაგზავნად გადაწყვეტ FormData ობიექტის გამოყენებას, რა დროსაც headers-ის მითითება საჭირო არ არის, რადგან ბრაუზერი თავად უზრუნველყოფს სწორი ტიპის მითითებას.

// მონაცემები (API):

// URL (Endpoint): https://jsonplaceholder.typicode.com/posts

// HTTP მეთოდი: POST

// პირობები და ნაბიჯები, რომლებიც კოდში უნდა შეასრულო:

// შექმენი FormData ობიექტი: გამოიყენე new FormData() და .append() მეთოდი, რომ დაამატო შემდეგი სამი ველი:

// title: (შენი სასურველი სათაური, მაგ: "ჩემი ახალი პოსტი")

// body: (პოსტის მთავარი ტექსტი)

// userId: (ნებისმიერი რიცხვი, მაგალითად: 1)

// გამოიყენე fetch ფუნქცია: დაწერე მოთხოვნა მითითებულ URL-ზე.

// გაუწერე კონფიგურაცია (Options): fetch-ის მეორე არგუმენტში მიუთითე:

// method: POST

// body: გადაეცი შენ მიერ შექმნილი FormData ობიექტი (გაითვალისწინე: ამ დროს JSON.stringify და headers არ გვჭირდება).

// დაამუშავე სერვერის პასუხი: წაიკითხე სერვერის პასუხი როგორც JSON და გამოიტანე კონსოლში (console.log).

// ერორების დაჭერა: არ დაივიწყო შეცდომების მართვა (try...catch ან .catch()), რომ რაიმე პრობლემის შემთხვევაში კონსოლში შესაბამისი შეტყობინება დაიბეჭდოს.




async function addPost() {
    try{
        const formData = new FormData();
        formData.append("title", "My new post");
        formData.append("body", "main text");
        formData.append("userId", 68);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        console.log("Server's answer:", result);
    } 
    catch (error){
        console.log("Network error:", error.message);
    }
}

// test
addPost();

