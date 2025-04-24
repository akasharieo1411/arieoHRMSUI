import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router";

const AuthLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="mb-2 block">
          <Label htmlFor="Username" value="Username" className="text-gray-700 dark:text-gray-200" />
        </div>
        <TextInput
          id="Username"
          type="text"
          sizing="md"
          required
          className="form-control form-rounded-xl"
          theme={{
            field: {
              input: {
                base: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
              },
            },
          }}
        />
      </div>
      <div className="mb-4">
        <div className="mb-2 block">
          <Label htmlFor="userpwd" value="Password" className="text-gray-700 dark:text-gray-200" />
        </div>
        <TextInput
          id="userpwd"
          type="password"
          sizing="md"
          required
          className="form-control form-rounded-xl"
          theme={{
            field: {
              input: {
                base: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
              },
            },
          }}
        />
      </div>

      <div className="flex justify-between my-5 text-sm text-gray-600 dark:text-gray-300">
        {/* Optional: re-enable Remember checkbox */}
        {/* <div className="flex items-center gap-2">
          <Checkbox id="accept" className="checkbox dark:bg-gray-700" />
          <Label htmlFor="accept" className="opacity-90 font-normal cursor-pointer dark:text-gray-300">
            Remember this Device
          </Label>
        </div>
        <Link to="/" className="text-primary hover:underline dark:text-blue-400">
          Forgot Password?
        </Link> */}
      </div>

      <Button type="submit" color="primary" className="w-full bg-primary text-white dark:bg-blue-700 rounded-xl">
        Sign in
      </Button>
    </form>
  );
};

export default AuthLogin;
