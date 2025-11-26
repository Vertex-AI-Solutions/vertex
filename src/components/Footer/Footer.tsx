import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
                            VERTEX
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            Pioneering the future of digital interaction through AI, Automation, and intelligent design.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">AI Integration</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Automation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Vertex Agency. All rights reserved.
                    </p>

                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
