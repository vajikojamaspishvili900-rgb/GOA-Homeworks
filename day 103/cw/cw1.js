// 0) კომენტარებით ახსენით რაში გვეხმარება component interactionი
// 1) გაიარეთ codecademy ქვემოთ მოცემული reviewმდე (image1.png)
// https://www.codecademy.com/courses/react-101/lessons/components-render-each-other/exercises/review

// 0) component interaction - გვეხმაება სხვადასხვა component-ებს შორის ინფორმაციის გაზიარებაში და კომუნიკაციაში. 
// ეს საშუალებას გვაძლევს, რომ ერთი component-ის მონაცემები გადავცეთ მეორეს, რაც ზრდის კოდის გამეორების შემცირებას და უზრუნველყოფს უკეთეს ორგანიზაციას.
// მაგ:

function ParentComponent() {
    const parentMessage = "Hello I AM Parent Component!";
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={parentMessage} />
        </div>
    );
}

function ChildComponent({ message }) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
        </div>
    );
}


// 1) 
// (my1.png)




