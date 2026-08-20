export default function BankPageLoading() {
  return (
    <main className="min-h-dvh animate-pulse">
      {/* Header skeleton */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <div className="h-9 w-9 shrink-0 rounded-lg bg-secondary" />
          <div className="h-10 w-10 shrink-0 rounded-xl bg-secondary" />
          <div className="min-w-0 flex-1">
            <div className="h-4 w-28 rounded bg-secondary" />
            <div className="mt-2 h-3 w-20 rounded bg-secondary" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-md px-4 py-5">
        {/* Card showcase skeleton */}
        <div className="h-48 w-full rounded-3xl bg-secondary" />

        {/* Form skeleton */}
        <div className="mt-6 space-y-4">
          <div className="h-12 w-full rounded-xl bg-secondary" />
          <div className="flex gap-3">
            <div className="h-12 flex-1 rounded-xl bg-secondary" />
            <div className="h-12 flex-1 rounded-xl bg-secondary" />
            <div className="h-12 flex-1 rounded-xl bg-secondary" />
          </div>
          <div className="h-12 w-full rounded-xl bg-secondary" />
          <div className="h-12 w-full rounded-xl bg-primary/30" />
        </div>
      </div>
    </main>
  )
}
