package PortfolioReviewService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.forge.PortfolioReviewService.models.Criteria;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.Project;
import com.forge.PortfolioReviewService.repository.CriteriaRepo;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;

@SpringBootTest
class PortfolioGenerationServiceApplicationTests {
//
//	@Test
//	void contextLoads() {
//	}
//	
	@MockBean
	private PortfolioRepo portfolioRepo;
	
	
	@Test
    public void testSaveNewPotfolio() {
		
		//PortfolioRepo portfolioRepoFromContext = context.getBean(Portfolio.class);

		Project p1 = new Project();
		Project p2 = new Project();
		List<Project> projList = new ArrayList<Project>();
		projList.add(p1);
		projList.add(p2);
        PortfolioItems pI = new PortfolioItems(); 
        pI.setItems(projList);
        List<PortfolioItems> potList = new ArrayList<PortfolioItems>();
        potList.add(pI);
        Portfolio port1 = new Portfolio(2, "pending", 1, potList);
        
      
        //Portfolio result = portfolioRepo.findById(1);
        //portfolioRepo.save(new Portfolio(2, "pending", 1, potList));
        
        when(portfolioRepo.findById(2)).thenReturn(port1);

    
       assertEquals(port1, portfolioRepo.findById(2));
    }
	
}
