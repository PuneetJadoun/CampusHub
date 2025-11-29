import MainLayout from '../layouts/MainLayout';

function RentPage() {
  return (
    <MainLayout>
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Rent Your Item</h1>
        <p className="text-gray-600 mb-8">Upload an item you want to rent out to students.</p>

        {/* FORM STRUCTURE */}
        <div className="space-y-6">
          {/* ITEM NAME */}
          <div>
            <label className="block mb-1 font-medium">Item Name</label>
            <input
              type="text"
              className="w-full border p-3 rounded"
              placeholder="e.g. Scientific Calculator"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border p-3 rounded"
              placeholder="Describe the item"
              rows="4"
            ></textarea>
          </div>

          {/* RENT PRICE */}
          <div>
            <label className="block mb-1 font-medium">Price (per day/week)</label>
            <input
              type="number"
              className="w-full border p-3 rounded"
              placeholder="e.g. 50 / day"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select className="w-full border p-3 rounded">
              <option>Books</option>
              <option>Electronics</option>
              <option>Hostel Essentials</option>
              <option>Cycles</option>
              <option>Accessories</option>
            </select>
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block mb-2 font-medium">Upload Images</label>
            <input type="file" multiple className="w-full" />
          </div>

          {/* SUBMIT BTN */}
          <button className="w-full bg-black text-white py-3 rounded text-lg">Upload Item →</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default RentPage;
