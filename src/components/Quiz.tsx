import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Questions {
  [key: string]: Question[];
}

const questions: Questions = {
    Python: [
        { question: 'What is a correct syntax to output "Hello World" in Python?', options: ['print("Hello World")', 'echo "Hello World"', 'p("Hello World")'], answer: 'print("Hello World")' },
        { question: 'Which of the following is a mutable data type in Python?', options: ['List', 'Tuple', 'String'], answer: 'List' },
        { question: 'How do you start a comment in Python?', options: ['//', '#', '/*'], answer: '#' },
        { question: 'Which keyword is used for function in Python?', options: ['func', 'def', 'function'], answer: 'def' },
        { question: 'How do you create a variable with the numeric value 5?', options: ['x = 5', 'x := 5', 'x << 5'], answer: 'x = 5' },
        { question: 'Which method can be used to remove any whitespace from both ends of a string?', options: ['len()', 'strip()', 'trim()'], answer: 'strip()' },
        { question: 'What is the output of print(2**3)?', options: ['6', '8', '9'], answer: '8' },
        { question: 'Which collection is ordered, changeable, and allows duplicate members?', options: ['Set', 'Dictionary', 'List'], answer: 'List' },
        { question: 'What is the correct file extension for Python files?', options: ['.pyth', '.pt', '.py'], answer: '.py' },
        { question: 'How do you insert COMMENTS in Python code?', options: ['// This is a comment', '# This is a comment', '/* This is a comment */'], answer: '# This is a comment' },
      ],
      Chash: [
        { question: 'What does chash mean?', options: ['An error', 'A success', 'A loop'], answer: 'An error' },
        { question: 'What causes a program to chash?', options: ['Infinite loop', 'Syntax error', 'Runtime error'], answer: 'Runtime error' },
        { question: 'Which tool can help debug chashes?', options: ['Compiler', 'Debugger', 'Editor'], answer: 'Debugger' },
        { question: 'What is a core dump?', options: ['Backup', 'Memory snapshot', 'Source code'], answer: 'Memory snapshot' },
        { question: 'What does the blue screen of death indicate?', options: ['Hardware issue', 'Software crash', 'Network error'], answer: 'Software crash' },
        { question: 'Which log file stores crash information?', options: ['Crashlog', 'Systemlog', 'Errorlog'], answer: 'Errorlog' },
        { question: 'What is segmentation fault?', options: ['Memory access error', 'Disk error', 'Network error'], answer: 'Memory access error' },
        { question: 'Which programming error often causes crashes?', options: ['Syntax error', 'Logic error', 'Memory leak'], answer: 'Memory leak' },
        { question: 'What can be used to avoid crashes?', options: ['Code review', 'Ignoring errors', 'Disabling logs'], answer: 'Code review' },
        { question: 'What is the first step in troubleshooting a crash?', options: ['Restart system', 'Identify issue', 'Reinstall software'], answer: 'Identify issue' },
      ],
      'C++': [
        { question: 'Which of the following is used to create an object in C++?', options: ['Class', 'Object', 'Constructor'], answer: 'Class' },
        { question: 'What is the correct syntax for a class in C++?', options: ['class MyClass {}', 'MyClass class {}', 'class {} MyClass'], answer: 'class MyClass {}' },
        { question: 'How do you define a function in C++?', options: ['func myFunction() {}', 'def myFunction() {}', 'void myFunction() {}'], answer: 'void myFunction() {}' },
        { question: 'Which operator is used to access members of a class?', options: ['.', '->', '::'], answer: '.' },
        { question: 'What is the default access level for class members in C++?', options: ['Public', 'Private', 'Protected'], answer: 'Private' },
        { question: 'Which keyword is used to inherit a class?', options: ['inherit', 'extends', 'public'], answer: 'public' },
        { question: 'What is polymorphism in C++?', options: ['Overloading operators', 'Inheritance', 'Multiple forms'], answer: 'Multiple forms' },
        { question: 'Which function is called to create an object?', options: ['Main', 'Constructor', 'Destructor'], answer: 'Constructor' },
        { question: 'How do you allocate memory dynamically in C++?', options: ['malloc', 'new', 'alloc'], answer: 'new' },
        { question: 'What is a pointer?', options: ['Reference variable', 'Memory address', 'Function argument'], answer: 'Memory address' },
      ],
      'UI/UX': [
        { question: 'What does UX stand for?', options: ['User Experience', 'User Extension', 'User Example'], answer: 'User Experience' },
        { question: 'What does UI stand for?', options: ['User Interface', 'User Internet', 'User Information'], answer: 'User Interface' },
        { question: 'Which of these is a principle of UX design?', options: ['Usability', 'Readability', 'Scalability'], answer: 'Usability' },
        { question: 'What is a wireframe?', options: ['A low-fidelity design', 'A high-fidelity design', 'A finished design'], answer: 'A low-fidelity design' },
        { question: 'What is the primary goal of UI design?', options: ['Visual appeal', 'Functionality', 'Interactivity'], answer: 'Visual appeal' },
        { question: 'What is a user persona?', options: ['A fictional user', 'A real user', 'A design tool'], answer: 'A fictional user' },
        { question: 'What is prototyping?', options: ['Creating a preliminary model', 'Finalizing the design', 'User testing'], answer: 'Creating a preliminary model' },
        { question: 'Which tool is commonly used for UI/UX design?', options: ['Photoshop', 'Sketch', 'Illustrator'], answer: 'Sketch' },
        { question: 'What is A/B testing?', options: ['Comparing two versions', 'Accessibility testing', 'User feedback'], answer: 'Comparing two versions' },
        { question: 'What does responsive design mean?', options: ['Adapts to screen size', 'Fast loading', 'Colorful interface'], answer: 'Adapts to screen size' },
      ]
    };
    

interface QuizProps {
  skill: string;
}

const Quiz: React.FC<QuizProps> = ({ skill }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[skill][currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions[skill].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
      saveScore(skill, score + 1);  // Save the final score
    }
  };

  const saveScore = (skill: string, score: number) => {
    let analytics = JSON.parse(localStorage.getItem('analytics') || '{}');
    if (!analytics) {
      analytics = {};
    }
    analytics[skill] = score;
    localStorage.setItem('analytics', JSON.stringify(analytics));
  };

  return (
    <div>
      {!completed ? (
        <div>
          <h2 className="text-xl mb-4">Skill: {skill}</h2>
          <div className="mb-4">
            <p>{questions[skill][currentQuestionIndex].question}</p>
            {questions[skill][currentQuestionIndex].options.map(option => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-4">Quiz Completed!</h2>
          <p>Your score: {score} / {questions[skill].length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
