// Ensures three-bas patches the SAME THREE instance you import elsewhere
import * as THREE_NS from "three";
import "three-bas";               // mutates the imported THREE instance

// Re-export the patched THREE so consumers don’t import from "three" directly
export const THREE = THREE_NS as any;