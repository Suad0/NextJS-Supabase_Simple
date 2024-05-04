import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Watch List</h1>
        <p className="text-lg mb-6">Your personal space for your watches</p>
        <div className="mx-auto max-w-sm">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
