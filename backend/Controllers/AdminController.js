const Order = require('../db/Models/Order');
const Product = require('../db/Models/Product');

const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalSalesAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } },
    ]);

    const totalSales = totalSalesAgg[0]?.total || 0;

    res.status(200).json({
      totalOrders,
      totalProducts,
      totalSales,
    });
  } catch (err) {
    console.error('Error fetching admin stats:', err);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
};

module.exports = { getAdminStats };