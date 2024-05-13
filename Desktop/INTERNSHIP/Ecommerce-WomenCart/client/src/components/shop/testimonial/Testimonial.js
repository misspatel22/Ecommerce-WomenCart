import React from 'react'

function Testimonial() {
    return (
        <div>
            <section className="text-gray-600 body-font my-3">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/thumbnails/004/773/271/small/a-beautiful-girl-with-a-fashionable-hairstyle-and-makeup-illustration-on-the-theme-of-beauty-and-fashion-vector.jpg" />
                                <p className="leading-relaxed" style={{textAlign:'justify'}}>Once again, your hard work does not go unnoticed, and I genuinely appreciate your dedication. All the team members did their best to deliver quality descriptions for the products. Really impressed with the quality and timely work.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ms. Vidhi Patel</h2>
                                <p className="text-gray-500">Senior Web Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://t3.ftcdn.net/jpg/06/28/08/84/360_F_628088469_5lkTmfa6dH0GuK0K5DQxlDuwanyRcbdc.jpg" />
                                <p className="leading-relaxed" style={{textAlign:'justify'}}>Can’t believe that I am actually able to double my sales on Amazon. All thanks to your marketing team. You delivered just as you promised. Highly impressed with the outcomes. Great work team!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mr. P. Patel</h2>
                                <p className="text-gray-500">UI/UX Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" />
                                <p className="leading-relaxed" style={{textAlign:'justify'}}>All the listings of my store are live now. The data and images look accurate, just as your team always does great work! Thank you to all the team members for your detailed, timely, and accurate attention to our projects.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mr. Patel</h2>
                                <p className="text-gray-500">Android Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial