import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <button className='px-12 py-2 bg-primary text-white rounded-lg'>
                    Login
                </button>
            </DialogTrigger>
            <DialogContent className="p-6 max-w-sm mx-auto rounded-lg shadow-lg bg-white">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl font-semibold">Login</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <Input type="email" placeholder="Enter your email" className="mt-1 w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <Input type="password" placeholder="Enter your password" className="mt-1 w-full" />
                    </div>
                    <Button className="w-full bg-primary text-white">Login</Button>
                    <p className="text-sm text-center text-gray-500">Don't have an account? <a href="#" className="text-primary">Sign up</a></p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Login;