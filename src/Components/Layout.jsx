export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="relative mx-auto max-w-6xl bg-gray-50 border-l border-r border-b border-gray-200 min-h-screen px-8">
                {children}
            </div>
        </div>
    );
}