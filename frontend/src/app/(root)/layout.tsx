import ChatButton from "../components/chat/ChatButton";
import Header from "../components/shared/Header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <ChatButton />
    </div>
  );
}
