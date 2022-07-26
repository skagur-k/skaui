import React from 'react';

// src/getValidChildren.ts
function getValidChildren(children) {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  );
}

// src/mergeRefs.ts
function mergeRefs(...refs) {
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}

export { getValidChildren, mergeRefs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRWYWxpZENoaWxkcmVuLnRzIiwiLi4vc3JjL21lcmdlUmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxXQUFXO0FBRVgsU0FBUyxpQkFBaUIsVUFBMkI7QUFDM0QsU0FBTyxNQUFNLFNBQVMsUUFBUSxRQUFRLEVBQUU7QUFBQSxJQUFPLENBQUMsVUFDL0MsTUFBTSxlQUFlLEtBQUs7QUFBQSxFQUMzQjtBQUNEOzs7QUNKTyxTQUFTLGFBQ1osTUFDZTtBQUNsQixTQUFPLENBQUMsVUFBVTtBQUNqQixhQUFTLE9BQU8sTUFBTTtBQUNyQixVQUFJLE9BQU8sUUFBUSxZQUFZO0FBQzlCLFlBQUksS0FBSztBQUFBLE1BQ1YsV0FBVyxPQUFPLE1BQU07QUFDdkIsWUFBSSxVQUFVO0FBQUEsTUFDZjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZENoaWxkcmVuKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpIHtcblx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+XG5cdFx0UmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpXG5cdCkgYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VmFsaWRDaGlsZHJlblxuIiwiaW1wb3J0IHsgRm9yd2FyZGVkUmVmIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnM8VCA9IGFueT4oXG5cdC4uLnJlZnM6IEZvcndhcmRlZFJlZjxUPltdXG4pOiBGb3J3YXJkZWRSZWY8VD4ge1xuXHRyZXR1cm4gKHZhbHVlKSA9PiB7XG5cdFx0Zm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZih2YWx1ZSlcblx0XHRcdH0gZWxzZSBpZiAocmVmICE9IG51bGwpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSB2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19