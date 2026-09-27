export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />
      <p className="mt-3 text-xs font-bold text-purple-800 animate-pulse">
        লোড হচ্ছে...
      </p>
    </div>
  );
}