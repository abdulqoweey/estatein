import { testdata } from './testdata' // Adjust the path based on the file location
import TestCard from './testcard'



function TestData() {
  return (
    <div>
      <h2>Test List</h2>
                
          {testdata.map((test, index) => (
        <TestCard key={index} test={test} /> /* ✅ Pass each item as test */
      ))}
    </div>
  )
}

export default TestData
