function App() {

  return (
    <>
    <main className="relative flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 w-[300]">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="w-24 h-8 bg-[#1F3540] rounded-md flex justify-center items-center">Turno</div>
          <div className="w-8 h-8 bg-[#2FC4BE] rounded-md"><img src="" alt="" /></div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl shadow-lg shadow-[#0e212a]"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>

          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>

          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>
          <div className="w-24 h-24 bg-[#1F3540] rounded-xl"></div>

        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="w-24 h-14 bg-[#2FC4BE] rounded-lg flex flex-col items-center justify-center">
            <p>X (TU)</p>
            <p>0</p>
          </div>
          <div className="w-24 h-14 bg-[#A8BEC9] rounded-lg flex flex-col items-center justify-center">
            <p>Empate</p>
            <p>0</p>
          </div>
          <div className="w-24 h-14 bg-[#F1B136] rounded-lg flex flex-col items-center justify-center">
            <p>O (CPU)</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
