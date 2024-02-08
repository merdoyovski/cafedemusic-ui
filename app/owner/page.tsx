import { ContentLayout } from "../_components/Owner/Content.layout";
import { Header } from "../_components/Owner/Header";
import { Sidebar } from "../_components/Owner/Sidebar";
import { Spotify } from "../_components/Spotify/Spotify";

export default function OwnerPage() {
  return (
    <div className="bg-light-gray flex w-screen h-screen">
      <Sidebar></Sidebar>

      <div className="flex flex-col w-full h-full">
        <Header></Header>

        <ContentLayout></ContentLayout>
      </div>
    </div>
  );
}

/*
  <div className="w-[500px] flex flex-col gap-4">
        <div>Currently Playing</div>
        <Spotify
          wide={true}
          link={
            "https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN?si=211e8fa5d7b34c3a"
          }
        ></Spotify>
*/
