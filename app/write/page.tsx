import { DiaryEditor } from "@/components/diary/DiaryEditor";
import { DiaryHeader } from "@/components/diary/DiaryHeader";

export default function WritePage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/50">
      <DiaryHeader />
      <main className="flex-1">
        <DiaryEditor />
      </main>
    </div>
  );
}