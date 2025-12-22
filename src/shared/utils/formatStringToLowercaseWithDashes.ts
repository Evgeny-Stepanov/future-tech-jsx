const formatStringToLowercaseWithDashes = (string: string) => {
	return string.toLowerCase().replace(/\s/g, "-");
};

export default formatStringToLowercaseWithDashes;
