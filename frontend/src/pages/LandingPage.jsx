import MainLayout from '../layouts/MainLayout';

function LandingPage() {
  return (
    <MainLayout>

      <div className="p-8">
        {/* GREETING SECTION */}
        <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
        <p className="text-gray-600 mb-8">What do you want to do today?</p>

        {/* MAIN ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* RENT BUTTON */}
          <div className="border p-8 rounded-xl hover:bg-gray-100 cursor-pointer text-center">
            <h2 className="text-xl font-semibold mb-2">Rent Your Item</h2>
            <p className="text-gray-600 text-sm">Upload your items that you want to rent.</p>
          </div>

          {/* SELL BUTTON */}
          <div className="border p-8 rounded-xl hover:bg-gray-100 cursor-pointer text-center">
            <h2 className="text-xl font-semibold mb-2">Sell Your Item</h2>
            <p className="text-gray-600 text-sm">List items you want to sell to campus students.</p>
          </div>
        </div>

        {/* BROWSE SECTION */}
        <h2 className="text-2xl font-semibold mb-4">Start Browsing</h2>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-xl p-4 hover:bg-gray-100">
              <div className="h-28 bg-gray-200 rounded mb-3"></div>
              <p className="font-semibold">Item Name</p>
              <p className="text-gray-600 text-sm">₹ Price</p>
            </div>
          ))}
        </div>
      </div>
      
    </MainLayout>
  );
}

export default LandingPage;
