import React,{useState} from 'react';

export default function TextForm() {

    const handleUpClick = ()=>{
        console.log('Printing Handle up Click' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('Here is my set Text');

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">TextUtils</h2>
                <form action="#" className="space-y-8">
   
                    <div className="sm:col-span-2">
                        <textarea id="message" rows="6" value={text} onChange={handleOnChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Text Here...."></textarea>
                    </div>

                    <button className="py-3 px-5 text-sm border-2 font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleUpClick}>Convert UpperCase</button>
                </form>

                <div className='py-2'> 
                    <div className='font-semibold'> Count Words </div>
                    {text.split(" ").length} Words and {text.length} Characters
                    <div>Approximatly <span className='text-green-700'> {0.008 * text.split(" ").length} </span> Minutes to read</div>
                </div>
            </div>
        </section>
    )
}
