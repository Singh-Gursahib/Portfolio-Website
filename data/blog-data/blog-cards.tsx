export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  accentColor: string;
  image: string;
  readingTime: string;
};

export const blogCards: BlogCard[] = [
    {
        slug: "revolutionizing-microbiology-education",
        title: "Revolutionizing Microbiology Education Through Interactive Discovery",
        excerpt: "Explore our TRU research project using virtual labs and historical simulations to make microbiology engaging and intuitive for students.",
        date: "2025-03-27", 
        tags: ["Microbiology", "EdTech", "Virtual Labs", "Research"], 
        accentColor: "from-cyan-500 to-blue-500", 
        image: "/assets/research/posters/microbiology-poster-cover.png",
        readingTime: "6 min read"
      },
  {
    slug: "ureap-funding",
    title: "Securing $6,000 in UREAP Funding for Privacy-Preserving LLM Research",
    excerpt: "Announcing my UREAP funding for research on privacy-preserving LLMs at TRU",
    date: "2025-04-20",
    tags: ["AI Research", "LLM", "Education", "Privacy", "UREAP"],
    accentColor: "from-purple-500 to-pink-500",
    image: "../assets/research/posters/TRU-LLM-Project-cover.png",
    readingTime: "3 min read"
  }
]; 