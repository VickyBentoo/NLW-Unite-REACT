import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div>
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
        <Search className="size-4 text-emerald-300"/>
      <input className="bg-transparent flex-1" placeholder="Buscar participante..."/>
      </div>
      </div>

      <table>
        <thead>
        <tr>
          <th>
            
          </th>
        </tr>
        </thead>
      </table>
    </div>
  )
}