export const Footer = () => {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
            <div className="px-8 py-3">
                <p className="link">India</p>
            </div>

            <div className="text-sm flex sm:flex-row p-3 sm:p-4 flex-col items-center sm:justify-evenly lg:justify-between">
                <div className="flex space-x-8 mb-5 sm:px-5 sm:mb-0">
                    <p className="link">About</p>
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search Works</p>
                </div>
                <div className="flex space-x-8 sm:px-5">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    );
}