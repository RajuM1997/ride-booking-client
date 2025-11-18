import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-7xl md:text-9xl font-extrabold"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground mt-4 text-center"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition 
                     dark:bg-green-500 dark:hover:bg-green-600"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
