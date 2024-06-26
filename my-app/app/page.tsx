import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import ProjectPreview, {ProjectPreviewInterface,} from "@/components/project_preview";
import Layout from "@/components/layout";

export default function Home() {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Data Analysis App",
    desc: "Processes data in Python",
    linkUrl: "/data_analysis",
    image: "/coding.jpg",
  });

  projectMetadataArray.push({
    title: "Sound Processing App",
    desc: "Cleans up podcast audio",
    linkUrl: "/sound_processing",
    image: "/headphones.jpg",
  });

  projectMetadataArray.push({
    title: "Social Media Tracker",
    desc: "Tracks time and usage",
    linkUrl: "/social_tracker",
    image: "/youtube.jpg",
  });

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }
  
  return (
    <Layout>
      <Header />
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
      <Footer />
    </Layout>
      
  );
};

