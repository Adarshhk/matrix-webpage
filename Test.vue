<template>
    <div class="confirmation-container">
      <h1>Order Confirmed</h1>
      <p class="success-message">Your signal order has been successfully placed.</p>
  
      <div class="details-section">
        <h2>Details:</h2>
        <div class="detail-row">
          <span>Instrument</span>
          <span>MIDCPNIFTY26AU62413050 CE</span>
        </div>
        <div class="detail-row">
          <span>Entry Price:</span>
          <span>$70.00</span>
        </div>
        <div class="detail-row">
          <span>Stop Loss (SL)</span>
          <span>$60.00</span>
        </div>
        <div class="detail-row">
          <span>Target</span>
          <span>$120.00</span>
        </div>
        <div class="detail-row">
          <span>P&L Target</span>
          <span>40%</span>
        </div>
      </div>
  
      <div class="button-group">
        <button class="primary-btn">Track Order</button>
        <button class="secondary-btn">Place Another Order</button>
        <button class="tertiary-btn">Go to Dashboard</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .confirmation-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .success-message {
    text-align: center;
    color: #27ae60;
    margin-bottom: 2rem;
  }
  
  .details-section {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 2rem;
    border: 1px solid #eee;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  
  .detail-row:last-child {
    border-bottom: none;
  }
  
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
  
  /* Primary Button Style */
  .primary-btn {
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .primary-btn:hover {
    background-color: #2980b9;
  }
  
  /* Secondary Button Style */
  .secondary-btn {
    background-color: transparent;
    color: #3498db;
    padding: 12px 24px;
    border: 2px solid #3498db;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
  }
  
  .secondary-btn:hover {
    background-color: #3498db22;
  }
  
  /* Tertiary Button Style */
  .tertiary-btn {
    background-color: transparent;
    color: #7f8c8d;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .tertiary-btn:hover {
    color: #34495e;
    text-decoration: underline;
  }
  </style>