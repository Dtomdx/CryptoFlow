import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string,
  avatar: string,
  author: string,
  role: string
}
const Testimonial = ({ quote, avatar, author, role }: TestimonialProps) => {
  return (
    <div className={`min-w-full px-4`}>
      <div className={`bg-white/5 border  border-white/10 rounded-xl p-8 md:p-10`}>
        <div className={`flex mb-6`}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 text-yellow fill-yellow-500`}
            />
          ))}
        </div>
        <p className={`text-lg md:text-xl text-gray-200 mb-8`}>
          {quote}
        </p>
        <div className={`flex items-center`}>
          <img
            src={avatar}
            alt={author}
            className={`w-12 h-12 rounded-full object-cover border-2 border-crypto-purple`}
          />
          <div className={`ml-4`}>
            <p className={`font-medium text-white`}>{author}</p>
            <p className={`text-sm text-gray-400`}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
