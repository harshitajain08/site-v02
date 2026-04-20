export default function WebsiteMockup() {
  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="h-12 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="text-xs text-white/40 font-mono ml-4">justask.studio</div>
      </div>

      {/* Content */}
      <div className="h-full bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-transparent p-6 flex flex-col justify-between">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/40 to-purple-500/40 border border-indigo-400/30" />
            <div className="flex-1 h-3 bg-gradient-to-r from-indigo-500/50 to-transparent rounded-full w-32" />
          </div>
          <div className="h-2.5 bg-gradient-to-r from-purple-400/40 to-transparent rounded-full w-48" />
          <div className="h-2 bg-gradient-to-r from-pink-400/30 to-transparent rounded-full w-40" />
        </div>

        {/* Main content blocks */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-lg border border-indigo-400/20" />
            <div className="h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg border border-purple-400/20" />
          </div>
          <div className="h-12 bg-gradient-to-r from-pink-500/20 to-transparent rounded-lg border border-pink-400/20" />
        </div>

        {/* Footer */}
        <div className="flex gap-2 pt-4 border-t border-white/5">
          <div className="h-8 flex-1 bg-gradient-to-r from-indigo-600/30 to-transparent rounded border border-indigo-400/20" />
          <div className="h-8 w-24 bg-gradient-to-r from-purple-600/30 to-transparent rounded border border-purple-400/20" />
        </div>
      </div>
    </div>
  )
}
