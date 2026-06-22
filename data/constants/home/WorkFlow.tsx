const WorkflowDiagram = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* In Progress - Left side */}
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <div className="bg-[#2A7A8A] text-white px-3 py-8 rounded-full text-sm font-medium writing-mode-vertical text-center min-h-[120px] flex items-center justify-center">
        <span className="transform -rotate-90 whitespace-nowrap">
          In Progress
        </span>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#4A9BAE] rounded-full"></div>
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#4A9BAE] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
        15
      </div>
    </div>

    {/* Right side workflow items */}
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-3">
      {/* Completed */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
        <div className="bg-[#2A7A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
          Completed
        </div>
        <div className="bg-[#4A9BAE] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          11
        </div>
      </div>

      {/* Next Up */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#FFC107] rounded-full"></div>
        <div className="bg-[#2A7A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
          Next Up
        </div>
        <div className="bg-[#4A9BAE] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          07
        </div>
      </div>

      {/* Not Started */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#FF5722] rounded-full"></div>
        <div className="bg-[#2A7A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
          Not Started
        </div>
        <div className="bg-[#4A9BAE] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          12
        </div>
      </div>

      {/* Backlog */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#607D8B] rounded-full"></div>
        <div className="bg-[#2A7A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
          Backlog
        </div>
        <div className="bg-[#4A9BAE] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          09
        </div>
      </div>
    </div>
  </div>
);
export default WorkflowDiagram;
