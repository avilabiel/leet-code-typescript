// O(n)
function sumUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1)
function isEven(n: number): boolean {
  return n % 2 === 0;
}

// O(log n)
interface Order {
  id: number;
  customerName: string;
  product: string;
}

function findOrderById(orders: Order[], orderId: number): Order | null {
  let left = 0;
  let right = orders.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (orders[mid].id === orderId) {
      return orders[mid];
    }
    if (orders[mid].id < orderId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}

let orders: Order[] = [
  { id: 1, customerName: "Alice", product: "Widget" },
  { id: 2, customerName: "Bob", product: "Gadget" },
  // Assume the rest of the orders are sorted by id...
];
let orderId = 2;
console.log(findOrderById(orders, orderId)); // Output: {id: 2, customerName: 'Bob', product: 'Gadget'}

// O(n log n)
interface Employee {
  name: string;
  salary: number;
}

function mergeSortEmployeesBySalary(employees: Employee[]): Employee[] {
  if (employees.length <= 1) {
    return employees;
  }

  const mid = Math.floor(employees.length / 2);
  const left = mergeSortEmployeesBySalary(employees.slice(0, mid));
  const right = mergeSortEmployeesBySalary(employees.slice(mid));

  return merge(left, right);
}

function merge(left: Employee[], right: Employee[]): Employee[] {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].salary < right[rightIndex].salary) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let employees: Employee[] = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 40000 },
  // Assume there are more employees...
];

console.log(mergeSortEmployeesBySalary(employees));
// Output: [{name: 'Charlie', salary: 40000}, {name: 'Alice', salary: 50000}, {name: 'Bob', salary: 60000}, ...]

// O(n)
function calculateTotalSalary(employees: Employee[]): number {
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }
  return totalSalary;
}

// O(nˆ2)
function findDuplicateProducts(products: Product[]): Product[] {
  let duplicates = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].name === products[j].name) {
        duplicates.push(products[i]);
      }
    }
  }
  return duplicates;
}

// O(ab)
function calculateTotalSales(stores: Store[]): number[] {
  let totalSales = [];
  for (let i = 0; i < stores.length; i++) {
    for (let j = 0; j < stores[i].products.length; j++) {
      totalSales.push(
        stores[i].products[j].price * stores[i].products[j].quantity
      );
    }
  }
  return totalSales;
}

// O(n!)
function generateSalesRoutes(salesStops: string[]): string[][] {
  if (salesStops.length === 1) return [salesStops];
  let routes = [];
  for (let i = 0; i < salesStops.length; i++) {
    const stop = salesStops[i];
    const remainingStops = salesStops
      .slice(0, i)
      .concat(salesStops.slice(i + 1));
    const remainingRoutes = generateSalesRoutes(remainingStops);
    for (let j = 0; j < remainingRoutes.length; j++) {
      routes.push([stop].concat(remainingRoutes[j]));
    }
  }
  return routes;
}

let salesStops: string[] = ["Store A", "Store B", "Store C"];
console.log(generateSalesRoutes(salesStops));
// Output: [['Store A', 'Store B', 'Store C'], ['Store A', 'Store C', 'Store B'], ['Store B', 'Store A', 'Store C'], ['Store B', 'Store C', 'Store A'], ['Store C', 'Store A', 'Store B'], ['Store C', 'Store B', 'Store A']]

function generateTeamCombinations(employees: string[]): string[][] {
  if (employees.length === 1) return [employees];
  let combinations = [];
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const remainingEmployees = employees
      .slice(0, i)
      .concat(employees.slice(i + 1));
    const remainingCombinations = generateTeamCombinations(remainingEmployees);
    for (let j = 0; j < remainingCombinations.length; j++) {
      combinations.push([employee].concat(remainingCombinations[j]));
    }
  }
  return combinations;
}

let employees: string[] = ["Alice", "Bob", "Charlie"];
console.log(generateTeamCombinations(employees));
// Output: [['Alice', 'Bob', 'Charlie'], ['Alice', 'Charlie', 'Bob'], ['Bob', 'Alice', 'Charlie'], ['Bob', 'Charlie', 'Alice'], ['Charlie', 'Alice', 'Bob'], ['Charlie', 'Bob', 'Alice']]
