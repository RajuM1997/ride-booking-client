/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { motion } from "framer-motion";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  if (isRouteErrorResponse(error)) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center 
        px-6 text-center"
      >
        <motion.h1
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="text-6xl md:text-8xl font-extrabold text-red-600 dark:text-red-400"
        >
          {error.status}
        </motion.h1>

        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4"
        >
          {error.statusText}
        </motion.h2>

        {error.data?.message && (
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mt-2"
          >
            {error.data.message}
          </motion.p>
        )}

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl 
              shadow-md transition dark:bg-red-500 dark:hover:bg-red-600"
          >
            Refresh
          </button>

          <Link
            to="/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl 
              shadow-md transition dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
        px-6 text-center"
    >
      <motion.h1
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="text-6xl md:text-8xl font-extrabold text-red-600 dark:text-red-400"
      >
        Oops!
      </motion.h1>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4"
      >
        Sorry, an unexpected error has occurred.
      </motion.p>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="italic text-gray-600 dark:text-gray-400 mt-2"
      >
        {error?.message || "Unknown error"}
      </motion.p>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4"
      >
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl 
            shadow-md transition dark:bg-red-500 dark:hover:bg-red-600"
        >
          Refresh
        </button>

        <Link
          to="/"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl 
            shadow-md transition dark:bg-gray-700 dark:hover:bg-gray-800"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
