import o from 'react';

function f(t){return o.Children.toArray(t).filter(e=>o.isValidElement(e))}function n(...t){return e=>{for(let r of t)typeof r=="function"?r(e):r!=null&&(r.current=e);}}

export { f as getValidChildren, n as mergeRefs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRWYWxpZENoaWxkcmVuLnRzIiwiLi4vLi4vc3JjL21lcmdlUmVmcy50cyJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFZhbGlkQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwibWVyZ2VSZWZzIiwicmVmcyIsInZhbHVlIiwicmVmIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFXLFFBRVgsU0FBU0MsRUFBaUJDLEVBQTJCLENBQzNELE9BQU9GLEVBQU0sU0FBUyxRQUFRRSxDQUFRLEVBQUUsT0FBUUMsR0FDL0NILEVBQU0sZUFBZUcsQ0FBSyxDQUMzQixDQUNELENDSk8sU0FBU0MsS0FDWkMsRUFDZSxDQUNsQixPQUFRQyxHQUFVLENBQ2pCLFFBQVNDLEtBQU9GLEVBQ1gsT0FBT0UsR0FBUSxXQUNsQkEsRUFBSUQsQ0FBSyxFQUNDQyxHQUFPLE9BQ2pCQSxFQUFJLFFBQVVELEVBR2pCLENBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZENoaWxkcmVuKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpIHtcblx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+XG5cdFx0UmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpXG5cdCkgYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VmFsaWRDaGlsZHJlblxuIiwiaW1wb3J0IHsgRm9yd2FyZGVkUmVmIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnM8VCA9IGFueT4oXG5cdC4uLnJlZnM6IEZvcndhcmRlZFJlZjxUPltdXG4pOiBGb3J3YXJkZWRSZWY8VD4ge1xuXHRyZXR1cm4gKHZhbHVlKSA9PiB7XG5cdFx0Zm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZih2YWx1ZSlcblx0XHRcdH0gZWxzZSBpZiAocmVmICE9IG51bGwpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSB2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19