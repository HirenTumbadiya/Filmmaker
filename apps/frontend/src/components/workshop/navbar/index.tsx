export default function WorkshopNavbar() {
  return (
    <nav className="text-white flex px-2 justify-between bg-neutral-900 items-center">
      <div className="ri-menu-line" />
      <div className="flex gap-5 py-2">
        <div>Save</div>
        <div>Export</div>
        <div>
          <span className="ri-settings-5-line" />
        </div>
      </div>
    </nav>
  );
}
