import React from 'react'

const HomePage = () => {
    return (
        <>
            <h1 className='flex justify-center'>My Todos</h1>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="space-y-12 p-8 bg-white rounded-md shadow-md w-full sm:max-w-md">
                    <div className='flex'>
                        <div>
                            <div>
                                <label htmlFor="">Title:</label>
                                <input type="text" />
                                <button className='bg-lime-500 m-5 colors-white'>Add</button>
                            </div>
                            <div>
                                <label htmlFor="">Discreption:</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default HomePage