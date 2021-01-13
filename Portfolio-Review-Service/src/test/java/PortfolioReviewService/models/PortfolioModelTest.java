package PortfolioReviewService.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.codehaus.groovy.syntax.Reduction;
import org.junit.jupiter.api.Test;

import com.forge.PortfolioReviewService.models.AboutMe;
import com.forge.PortfolioReviewService.models.Education;
import com.forge.PortfolioReviewService.models.IndustryEquivalency;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.models.SkillMatrix;

class PortfolioModelTest {
	
	//Review
	@Test
	public void portfolioItemTest() {
		PortfolioItems pI = new PortfolioItems();
		AboutMe am = new AboutMe();

		Education e1 = new Education();
		Education e2 = new Education();
		List<Education> eduList = new ArrayList<Education>();
		eduList.add(e1);
		eduList.add(e2);
		pI.setItems(eduList);

		
		assertNotNull(pI);

		assertEquals(2, eduList.size());
	}
	
	//Review
	@Test
    public void buildLooselyCoupledPortfolio() { //poggers
        Portfolio p = new Portfolio();
        p.setId(1);
        p.setStatus("Pending");
        Education ed1 = new Education();
        Education ed2 = new Education();
        List<Education> edList = new ArrayList<Education>();
        edList.add(ed1);
        edList.add(ed2);
        PortfolioItems educationItems = new PortfolioItems(1, 1, 1, "Education", edList);
        p.getPortfolioSection().add(educationItems);
        
        assertEquals(p.getPortfolioSection().size(), 1);
        assertEquals(p.getPortfolioSection().get(0).getItems().get(0), ed1);
    }

}
