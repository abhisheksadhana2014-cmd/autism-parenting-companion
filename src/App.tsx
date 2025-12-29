import { useState } from 'react'

function App() {
  const [showJournal, setShowJournal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Autism Parenting Companion
        </h1>
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
          <p className="text-2xl text-slate-700 mb-4">
            👋 You showed up today. <span className="text-blue-600 font-semibold">Small wins count.</span>
          </p>
          <p className="text-lg text-slate-600">Here's your week at a glance</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-3">Sessions</p>
          <p className="text-4xl font-bold text-slate-900">3</p>
          <p className="text-xs text-slate-500 mt-2">This week</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-400/90 to-emerald-500/90 backdrop-blur-xl text-white rounded-2xl p-8 shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-sm font-medium uppercase tracking-wide mb-3">Avg Score</p>
          <p className="text-4xl font-bold">7.8</p>
          <p className="text-xs mt-2">/10</p>
        </div>
        <div className="bg-gradient-to-br from-amber-400/90 to-amber-500/90 backdrop-blur-xl text-white rounded-2xl p-8 shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-sm font-medium uppercase tracking-wide mb-3">Child-led</p>
          <p className="text-4xl font-bold">12</p>
          <p className="text-xs mt-2">Moments</p>
        </div>
        <div className="bg-gradient-to-br from-violet-400/90 to-violet-500/90 backdrop-blur-xl text-white rounded-2xl p-8 shadow-lg border border-violet-200/50 hover:shadow-2xl transition-all hover:-translate-y-1">
          <p className="text-sm font-medium uppercase tracking-wide mb-3">Journal</p>
          <p className="text-4xl font-bold">8</p>
          <p className="text-xs mt-2">Entries</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          Quick actions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <button className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-6 h-full hover:bg-white">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <span className="text-4xl">▶️</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                Start Session
              </p>
              <p className="text-slate-600 text-lg">Connection play tracker</p>
            </div>
          </button>

          <button 
            onClick={() => setShowJournal(true)}
            className="group bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-6 h-full"
          >
            <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
              <span className="text-3xl">💭</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl mb-3">Quick Journal</p>
              <p className="text-white/90 text-lg">Trigger → Thought → Reframe</p>
            </div>
          </button>

          <button className="group bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-6 h-full">
            <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
              <span className="text-3xl">📈</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl mb-3">Self Assessment</p>
              <p className="text-white/90 text-lg">Connection rubric</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            Recent sessions <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-2xl">This week</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-6 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl hover:shadow-xl transition-all border border-slate-200">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-white">8</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-xl text-slate-900 mb-1 truncate">Block building + sensory play</p>
                <p className="text-slate-600 text-sm">Yesterday • 28 min session</p>
              </div>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-xl">Great!</span>
            </div>

            <div className="flex items-center gap-6 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl hover:shadow-xl transition-all border border-slate-200">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-white">7</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-xl text-slate-900 mb-1 truncate">Water sensory routine</p>
                <p className="text-slate-600 text-sm">2 days ago • 22 min session</p>
              </div>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-xl">Good</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button 
        onClick={() => setShowJournal(true)}
        className="fixed bottom-8 right-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center text-3xl z-50 border-4 border-white hover:scale-110"
      >
        +
      </button>

      {/* Quick Journal Modal */}
      {showJournal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-white/50 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Quick reflection</h2>
              <button
                onClick={() => setShowJournal(false)}
                className="p-3 hover:bg-slate-200 rounded-2xl transition-colors text-slate-600 hover:text-slate-900 text-xl"
              >
                ✕
              </button>
            </div>

            <form className="space-y-4">
              <label className="block">
                <span className="text-sm text-slate-600">Trigger</span>
                <input className="mt-1 block w-full rounded-lg border border-slate-200 p-3" />
              </label>

              <label className="block">
                <span className="text-sm text-slate-600">Thought</span>
                <textarea className="mt-1 block w-full rounded-lg border border-slate-200 p-3" rows={4} />
              </label>

              <div className="flex items-center justify-end gap-3">
                <button type="button" onClick={() => setShowJournal(false)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800">Close</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
