// app/components/Footer.js
export default function Footer() {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-4 text-center text-white">
                <p>&copy; {new Date().getFullYear()} Dealership Co. All rights reserved.</p>
            </div>
        </footer>
    );
}
