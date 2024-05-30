export default function Widget() {
    return (
        <div className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Happy Anniversary, [Her Name]!</h1>
            <p className="text-lg text-center max-w-md">A warm message expressing your love and the purpose of the webpage.</p>
        </div>
        
        <section className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Love Story</h2>
                
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 p-4">
                        <img src="https://placehold.co/400x300" alt="Love Story Timeline" className="rounded-lg shadow-md mb-4">
                    </div>
                    <div className="md:w-1/2 p-4">
                        <p className="text-lg mb-2">Reminisce about significant milestones with dates, descriptions, and photos.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Memory Gallery</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img src="https://placehold.co/300x300" alt="Memory 1" className="rounded-lg shadow-md">
                        <p className="text-sm mt-2">Caption for Memory 1</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/300x300" alt="Memory 2" className="rounded-lg shadow-md">
                        <p className="text-sm mt-2">Caption for Memory 2</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/300x300" alt="Memory 3" className="rounded-lg shadow-md">
                        <p className="text-sm mt-2">Caption for Memory 3</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Video Compilation</h2>
                
                <div className="flex justify-center">
                    <video controls className="max-w-full">
                        <source src="https://www.example.com/your-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
        
        <section className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Future Plans</h2>
                
                <ul className="list-disc list-inside">
                    <li>Traveling to Paris</li>
                    <li>Buying a House</li>
                    <li>More adventures to come...</li>
                </ul>
            </div>
        </section>
        
        <section className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Playlist</h2>
                
                <iframe src="https://open.spotify.com/embed/playlist/yourplaylistid" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </section>
        
        <section className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
                
                <form className="max-w-md mx-auto">
                    <label htmlFor="message" className="block mb-2">Write back to share your thoughts and feelings:</label>
                    <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Your message..."></textarea>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Send</button>
                </form>
            </div>
        </section>
    )
}