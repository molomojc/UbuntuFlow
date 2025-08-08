import React, { useState } from 'react';
import './EconomicSupport.css';

const EconomicSupport = () => {
  // Previous state variables remain unchanged
  const [creditScore, setCreditScore] = useState(720);
  const [aiSuggestions, setAiSuggestions] = useState([
    "Pay down credit card balances to below 30% of your credit limits",
    "Set up automatic payments to avoid missed payments",
    "Keep old credit accounts open to maintain a longer credit history",
    "Limit new credit applications to avoid hard inquiries"
  ]);

  const [scamAlerts, setScamAlerts] = useState([
    {
      id: 1,
      title: "Phishing Email Scam",
      description: "Fraudulent emails impersonating banks requesting personal information",
      date: "2023-06-15",
      trending: true
    },
    {
      id: 2,
      title: "Investment Fraud",
      description: "Fake investment opportunities promising high returns with low risk",
      date: "2023-06-10",
      trending: true
    },
    {
      id: 3,
      title: "Identity Theft",
      description: "Unauthorized access to personal financial information",
      date: "2023-06-05",
      trending: false
    }
  ]);

  const [retirementAge, setRetirementAge] = useState(65);
  const [currentAge, setCurrentAge] = useState(30);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [retirementGoal, setRetirementGoal] = useState(1000000);

  const [incomes, setIncomes] = useState([
    { id: 1, source: "Salary", amount: 4000, date: "2023-06-01" },
    { id: 2, source: "Freelance", amount: 800, date: "2023-06-15" }
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, category: "Rent", amount: 1200, date: "2023-06-01", description: "Monthly rent payment" },
    { id: 2, category: "Groceries", amount: 350, date: "2023-06-05", description: "Weekly groceries" },
    { id: 3, category: "Utilities", amount: 150, date: "2023-06-10", description: "Electricity and water bill" },
    { id: 4, category: "Entertainment", amount: 100, date: "2023-06-12", description: "Movie and dinner" },
    { id: 5, category: "Transportation", amount: 200, date: "2023-06-15", description: "Gas and maintenance" }
  ]);

  const [investingPlatforms, setInvestingPlatforms] = useState([
    { id: 1, name: "Wealthfront", description: "Automated investing with low fees", rating: 4.5 },
    { id: 2, name: "Betterment", description: "Goal-based investing with personalized advice", rating: 4.3 },
    { id: 3, name: "Robinhood", description: "Commission-free trading of stocks and crypto", rating: 4.0 },
    { id: 4, name: "Vanguard", description: "Low-cost index funds and ETFs", rating: 4.7 }
  ]);

  // Updated market items state with image URLs
  const [marketItems, setMarketItems] = useState([
    { 
      id: 1, 
      title: "MacBook Pro 2020", 
      price: 850, 
      seller: "JohnDoe", 
      category: "Electronics", 
      condition: "Good",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 2, 
      title: "Designer Handbag", 
      price: 120, 
      seller: "Fashionista", 
      category: "Fashion", 
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76d3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 3, 
      title: "Wooden Dining Table", 
      price: 250, 
      seller: "HomeDecor", 
      category: "Furniture", 
      condition: "Fair",
      image: "https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 4, 
      title: "Mountain Bike", 
      price: 300, 
      seller: "OutdoorEnthusiast", 
      category: "Sports", 
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ]);

  // Updated state for new item form with image
  const [newItem, setNewItem] = useState({
    title: "",
    price: "",
    category: "",
    condition: "",
    description: "",
    image: null,
    imagePreview: null
  });

  // State for advertisement confirmation
  const [showAdConfirmation, setShowAdConfirmation] = useState(false);

  // Previous functions remain unchanged
  const calculateRetirementProjection = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;
    const totalContributions = monthlyContribution * monthsToRetirement;
    
    const monthlyRate = 0.07 / 12;
    const futureValue = monthlyContribution * (((1 + monthlyRate) ** monthsToRetirement - 1) / monthlyRate);
    
    return {
      totalContributions,
      projectedValue: Math.round(futureValue),
      goalAchieved: futureValue >= retirementGoal
    };
  };

  const retirementProjection = calculateRetirementProjection();

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const netSavings = totalIncome - totalExpenses;

  // Updated handleAddItem function to include image
  const handleAddItem = (e) => {
    e.preventDefault();
    
    const newMarketItem = {
      id: marketItems.length + 1,
      title: newItem.title,
      price: parseFloat(newItem.price),
      seller: "CurrentUser",
      category: newItem.category,
      condition: newItem.condition,
      image: newItem.imagePreview // Using the preview URL as the image source
    };
    
    setMarketItems([...marketItems, newMarketItem]);
    
    // Reset form
    setNewItem({
      title: "",
      price: "",
      category: "",
      condition: "",
      description: "",
      image: null,
      imagePreview: null
    });
    
    // Show confirmation message
    setShowAdConfirmation(true);
    
    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowAdConfirmation(false);
    }, 3000);
  };

  // Updated handleInputChange to handle file input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  // New function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({
          ...newItem,
          image: file,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="economic-support-page">
      <header className="page-header">
        <h1>Economic Support Center</h1>
        <p>Your comprehensive financial wellness platform</p>
      </header>

      <main className="main-content">
        {/* Previous sections remain unchanged */}
        
        {/* Financial Literacy Programs Section */}
        <section className="section financial-literacy">
          <h2>Financial Literacy Programs</h2>
          <div className="program-cards">
            <div className="program-card">
              <h3>Budgeting Basics</h3>
              <p>Learn how to create and maintain a budget that works for your lifestyle.</p>
              <button className="btn-primary">Enroll Now</button>
            </div>
            <div className="program-card">
              <h3>Debt Management</h3>
              <p>Strategies to pay off debt efficiently and improve your financial health.</p>
              <button className="btn-primary">Enroll Now</button>
            </div>
            <div className="program-card">
              <h3>Investment Fundamentals</h3>
              <p>Understand the basics of investing to grow your wealth over time.</p>
              <button className="btn-primary">Enroll Now</button>
            </div>
            <div className="program-card">
              <h3>Saving Strategies</h3>
              <p>Learn effective ways to save money and build an emergency fund.</p>
              <button className="btn-primary">Enroll Now</button>
            </div>
          </div>
        </section>

        {/* Credit Score Section */}
        <section className="section credit-score">
          <h2>Credit Score & Improvement</h2>
          <div className="credit-score-container">
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{creditScore}</span>
                <span className="score-label">Credit Score</span>
              </div>
              <div className="score-range">
                <div className="range-indicator" style={{ left: `${(creditScore - 300) / 5.5}%` }}></div>
                <div className="range-labels">
                  <span>300</span>
                  <span>580</span>
                  <span>670</span>
                  <span>740</span>
                  <span>800</span>
                  <span>850</span>
                </div>
              </div>
            </div>
            <div className="ai-suggestions">
              <h3>AI-Generated Suggestions to Improve Your Score</h3>
              <ul>
                {aiSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
              <button className="btn-secondary">Refresh Suggestions</button>
            </div>
          </div>
        </section>

        {/* Scam Awareness Section */}
        <section className="section scam-awareness">
          <h2>Scam Awareness Alerts</h2>
          <div className="alerts-container">
            {scamAlerts.map(alert => (
              <div key={alert.id} className={`alert-card ${alert.trending ? 'trending' : ''}`}>
                <div className="alert-header">
                  <h3>{alert.title}</h3>
                  {alert.trending && <span className="trending-badge">Trending</span>}
                  <span className="alert-date">{alert.date}</span>
                </div>
                <p>{alert.description}</p>
                <div className="alert-actions">
                  <button className="btn-secondary">Learn More</button>
                  <button className="btn-outline">Report Similar</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Retirement Planning Section */}
        <section className="section retirement-planning">
          <h2>Retirement Fund Planning</h2>
          <div className="retirement-container">
            <div className="retirement-form">
              <div className="form-group">
                <label>Current Age</label>
                <input 
                  type="range" 
                  min="18" 
                  max="65" 
                  value={currentAge} 
                  onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                />
                <span>{currentAge} years</span>
              </div>
              <div className="form-group">
                <label>Retirement Age</label>
                <input 
                  type="range" 
                  min="50" 
                  max="75" 
                  value={retirementAge} 
                  onChange={(e) => setRetirementAge(parseInt(e.target.value))}
                />
                <span>{retirementAge} years</span>
              </div>
              <div className="form-group">
                <label>Monthly Contribution ($)</label>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="50"
                  value={monthlyContribution} 
                  onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
                />
                <span>${monthlyContribution}</span>
              </div>
              <div className="form-group">
                <label>Retirement Goal ($)</label>
                <input 
                  type="number" 
                  value={retirementGoal} 
                  onChange={(e) => setRetirementGoal(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="retirement-projection">
              <h3>Retirement Projection</h3>
              <div className="projection-stats">
                <div className="stat">
                  <span className="stat-label">Years to Retirement</span>
                  <span className="stat-value">{retirementAge - currentAge}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Total Contributions</span>
                  <span className="stat-value">${retirementProjection.totalContributions.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Projected Value</span>
                  <span className="stat-value">${retirementProjection.projectedValue.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Goal Status</span>
                  <span className={`stat-value ${retirementProjection.goalAchieved ? 'achieved' : 'not-achieved'}`}>
                    {retirementProjection.goalAchieved ? 'Goal Achieved!' : 'Adjust Contributions'}
                  </span>
                </div>
              </div>
              <div className="projection-chart">
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                  <div className="chart-bar" style={{ height: '85%' }}></div>
                  <div className="chart-bar" style={{ height: '95%' }}></div>
                  <div className="chart-bar" style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Tracker Section */}
        <section className="section financial-tracker">
          <h2>Financial Tracker</h2>
          <div className="tracker-container">
            <div className="tracker-summary">
              <div className="summary-card income">
                <h3>Total Income</h3>
                <div className="summary-amount">${totalIncome.toFixed(2)}</div>
              </div>
              <div className="summary-card expenses">
                <h3>Total Expenses</h3>
                <div className="summary-amount">${totalExpenses.toFixed(2)}</div>
              </div>
              <div className="summary-card savings">
                <h3>Net Savings</h3>
                <div className={`summary-amount ${netSavings >= 0 ? 'positive' : 'negative'}`}>
                  {netSavings >= 0 ? '+' : ''}{netSavings.toFixed(2)}
                </div>
              </div>
            </div>
            
            <div className="tracker-details">
              <div className="income-list">
                <h3>Income Sources</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incomes.map(income => (
                      <tr key={income.id}>
                        <td>{income.source}</td>
                        <td>${income.amount.toFixed(2)}</td>
                        <td>{income.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="expense-list">
                <h3>Expense Details</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map(expense => (
                      <tr key={expense.id}>
                        <td>{expense.category}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>{expense.date}</td>
                        <td>{expense.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Investing Section */}
        <section className="section investing">
          <h2>Investing</h2>
          <div className="investing-container">
            <div className="investing-intro">
              <h3>Start Building Your Wealth Today</h3>
              <p>Investing is one of the most powerful ways to build wealth over time. Even small amounts can grow significantly through compound interest.</p>
              <div className="benefits">
                <div className="benefit">
                  <div className="benefit-icon">📈</div>
                  <h4>Wealth Growth</h4>
                  <p>Grow your money faster than traditional savings accounts</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">🏖️</div>
                  <h4>Retirement Security</h4>
                  <p>Build a nest egg for your future retirement</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">🎓</div>
                  <h4>Financial Goals</h4>
                  <p>Achieve major life goals like buying a home or education</p>
                </div>
              </div>
            </div>
            
            <div className="platforms">
              <h3>Recommended Investing Platforms</h3>
              <div className="platform-cards">
                {investingPlatforms.map(platform => (
                  <div key={platform.id} className="platform-card">
                    <h4>{platform.name}</h4>
                    <div className="rating">
                      {'★'.repeat(Math.floor(platform.rating))}{'☆'.repeat(5 - Math.floor(platform.rating))}
                      <span>{platform.rating}</span>
                    </div>
                    <p>{platform.description}</p>
                    <button className="btn-primary">Learn More</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market Platform Section - Updated */}
        <section className="section market-platform">
          <h2>Market Platform</h2>
          <div className="market-container">
            <div className="market-items">
              <h3>Available Items</h3>
              <div className="items-grid">
                {marketItems.map(item => (
                  <div key={item.id} className="item-card">
                    <div className="item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <div className="item-price">${item.price}</div>
                      <div className="item-meta">
                        <span className="item-seller">Seller: {item.seller}</span>
                        <span className="item-category">{item.category}</span>
                        <span className="item-condition">{item.condition}</span>
                      </div>
                      <div className="item-actions">
                        <button className="btn-primary">Buy Now</button>
                        <button className="btn-outline">Contact Seller</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="sell-item">
              <h3>Sell Your Item</h3>
              {showAdConfirmation && (
                <div className="ad-confirmation">
                  Your item has been successfully advertised on the marketplace!
                </div>
              )}
              <form onSubmit={handleAddItem}>
                <div className="form-group">
                  <label>Item Image</label>
                  <div className="image-upload-container">
                    {newItem.imagePreview ? (
                      <div className="image-preview">
                        <img src={newItem.imagePreview} alt="Preview" />
                        <button 
                          type="button" 
                          className="remove-image"
                          onClick={() => setNewItem({...newItem, image: null, imagePreview: null})}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <label className="image-upload-label">
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageUpload}
                          className="image-upload-input"
                        />
                        <div className="upload-placeholder">
                          <span className="upload-icon">+</span>
                          <span>Upload Image</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    type="text" 
                    name="title"
                    value={newItem.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Price ($)</label>
                  <input 
                    type="number" 
                    name="price"
                    value={newItem.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select 
                    name="category"
                    value={newItem.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Sports">Sports</option>
                    <option value="Books">Books</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Condition</label>
                  <select 
                    name="condition"
                    value={newItem.condition}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary advertise-btn">Advertise on Marketplace</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <p>&copy; 2023 Economic Support Center. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default EconomicSupport;