const getCSSRootVariableValue = (variableName: string) => {
	const root = document.documentElement;
	const computedStyles = getComputedStyle(root);
	const variableValue = computedStyles.getPropertyValue(variableName);

	return variableValue;
};

export default getCSSRootVariableValue;
