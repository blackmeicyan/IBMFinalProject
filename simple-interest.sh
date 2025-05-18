#!/bin/bash

# Simple Interest Calculator
# Author: Your Name
# License: Apache License 2.0

echo "----------------------------------------"
echo "     Simple Interest Calculator"
echo "----------------------------------------"

# Function to validate numeric input
validate_number() {
    if ! [[ "$1" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
        echo "❌ Error: '$1' is not a valid number. Please enter a positive numeric value."
        exit 1
    fi
}

# Prompt user for input
read -p "Enter Principal Amount (P): " principal
validate_number "$principal"

read -p "Enter Annual Interest Rate (%) (R): " rate
validate_number "$rate"

read -p "Enter Time Period in Years (T): " time
validate_number "$time"

# Calculate simple interest
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Display result
echo "----------------------------------------"
echo "✅ Simple Interest = $interest"
echo "----------------------------------------"
